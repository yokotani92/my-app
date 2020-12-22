/*
 * Hinatazaka API
 *
 * 日向坂46を題材にしたサンプルAPI
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

// Discography - ディスコグラフィー情報
type Discography struct {

	// ID
	Id float32 `json:"id,omitempty"`

	// タイトル
	Title string `json:"title,omitempty"`

	// 種別
	Type string `json:"type,omitempty"`

	// センターのメンバーID
	CenterId float32 `json:"center_id,omitempty"`
}
