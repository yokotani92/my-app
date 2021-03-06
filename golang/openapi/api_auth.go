/*
 * Hinatazaka API
 *
 * 日向坂46を題材にしたサンプルAPI
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/coreos/go-oidc/v3/oidc"
	"golang.org/x/oauth2"
)

var (
	clientID          = os.Getenv("GOOGLE_OAUTH2_CLIENT_ID")
	clientSecret      = os.Getenv("GOOGLE_OAUTH2_CLIENT_SECRET")
	state             = os.Getenv("GOOGLE_OAUTH2_CLIENT_STATE")
	redirectURL       = os.Getenv("GOOGLE_OAUTH2_REDIRECT_URL")
	oidcProvider      = os.Getenv("GOOGLE_OIDC_PROVIDER")
	sessionCookieName = os.Getenv("SESSION_COOKIE_NAME")
)

// A AuthApiController binds http requests to an api service and writes the service results to the http response
type AuthApiController struct {
	service AuthApiServicer
}

// NewAuthApiController creates a default api controller
func NewAuthApiController(s AuthApiServicer) Router {
	return &AuthApiController{service: s}
}

// Routes returns all of the api route for the AuthApiController
func (c *AuthApiController) Routes() Routes {
	return Routes{
		{
			"GetAuth",
			strings.ToUpper("Get"),
			"/api/auth/signin",
			c.GetAuth,
		},
		{
			"GetAuthSignout",
			strings.ToUpper("Get"),
			"/api/auth/signout",
			c.GetAuthSignout,
		},
		{
			"GetCallback",
			strings.ToUpper("Get"),
			"/api/auth/callback",
			c.GetCallback,
		},
	}
}

// GetAuth - サインイン
func (c *AuthApiController) GetAuth(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	provider, err := oidc.NewProvider(ctx, oidcProvider)
	if err != nil {
		log.Fatal(err)
	}

	config := oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		Endpoint:     provider.Endpoint(),
		RedirectURL:  redirectURL,
		Scopes:       []string{oidc.ScopeOpenID, "profile", "email"},
	}

	authURL := config.AuthCodeURL(state)
	http.Redirect(w, r, authURL, http.StatusFound)
}

// GetAuthSignout - サインアウト
func (c *AuthApiController) GetAuthSignout(w http.ResponseWriter, r *http.Request) {
	session, _ := Store.Get(r, sessionCookieName)

	// 認証を無効にする。
	session.Values["authenticated"] = false
	session.Save(r, w)
	http.Redirect(w, r, "/", http.StatusFound)
}

// GetCallback - OPからのリダイレクト先
func (c *AuthApiController) GetCallback(w http.ResponseWriter, r *http.Request) {
	// 実装は go-oidc の exmaple が参考になる
	// https://github.com/coreos/go-oidc/blob/v3/example/idtoken/app.go

	ctx := r.Context()
	provider, err := oidc.NewProvider(ctx, oidcProvider)
	if err != nil {
		log.Fatal(err)
	}

	config := oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		Endpoint:     provider.Endpoint(),
		RedirectURL:  redirectURL,
		Scopes:       []string{oidc.ScopeOpenID, "profile", "email"},
	}

	// URLに含まれるstateがリダイレクト時に渡したものと同じことを確認
	if r.URL.Query().Get("state") != state {
		http.Error(w, "State did not match", http.StatusBadRequest)
		return
	}

	oidcConfig := &oidc.Config{
		ClientID: clientID,
	}
	verifier := provider.Verifier(oidcConfig)

	oauth2Token, err := config.Exchange(ctx, r.URL.Query().Get("code"))
	if err != nil {
		http.Error(w, "Failed to exchange token: "+err.Error(), http.StatusInternalServerError)
		return
	}
	rawIDToken, ok := oauth2Token.Extra("id_token").(string)
	if !ok {
		http.Error(w, "No id_token field in oauth2 token.", http.StatusInternalServerError)
		return
	}
	idToken, err := verifier.Verify(ctx, rawIDToken)
	if err != nil {
		http.Error(w, "Failed to verify ID Token: "+err.Error(), http.StatusInternalServerError)
		return
	}

	var idTokenClaims struct {
		Email          string `json:"email"`
		Email_Verified bool   `json:"email_verified"`
		Name           string `json:"name"`
		Given_Name     string `json:"given_name"`
		Family_Name    string `json:"family_name"`
		Picture        string `json:"picture"`
	}

	if err := idToken.Claims(&idTokenClaims); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	session, _ := Store.Get(r, sessionCookieName)
	// 認証情報を有効にする
	session.Values["authenticated"] = true
	session.Values["email"] = idTokenClaims.Email
	session.Values["name"] = idTokenClaims.Name
	session.Save(r, w)

	fmt.Printf("name: %s, email: %s", idTokenClaims.Name, idTokenClaims.Email)
	http.Redirect(w, r, "/", http.StatusFound)
	return
}
