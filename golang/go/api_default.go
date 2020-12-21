/*
 * sample API
 *
 * This is sample.
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	// "encoding/json"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

// A DefaultApiController binds http requests to an api service and writes the service results to the http response
type DefaultApiController struct {
	service DefaultApiServicer
}

// NewDefaultApiController creates a default api controller
func NewDefaultApiController(s DefaultApiServicer) Router {
	return &DefaultApiController{service: s}
}

// Routes returns all of the api route for the DefaultApiController
func (c *DefaultApiController) Routes() Routes {
	return Routes{
		{
			"PetsIdGet",
			strings.ToUpper("Get"),
			"/pets/{id}",
			c.PetsIdGet,
		},
	}
}

// PetsIdGet -
func (c *DefaultApiController) PetsIdGet(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := parseIntParameter(params["id"])
	if err != nil {
		w.WriteHeader(500)
		return
	}

	result, err := c.service.PetsIdGet(id)
	if err != nil {
		w.WriteHeader(500)
		return
	}

	EncodeJSONResponse(result, nil, w)
}
