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
	"time"
)

// Member - メンバー情報
type Member struct {

	// ID
	Id int64 `json:"id,omitempty"`

	// 名前
	Name string `json:"name"`

	// 年齢
	Age float32 `json:"age,omitempty"`

	// レコードの作成日時
	CreatedAt time.Time `json:"created_at,omitempty"`
}
