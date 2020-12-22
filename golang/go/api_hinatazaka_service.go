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
	"errors"
)

// HinatazakaApiService is a service that implents the logic for the HinatazakaApiServicer
// This service should implement the business logic for every endpoint for the HinatazakaApi API. 
// Include any external packages or services that will be required by this service.
type HinatazakaApiService struct {
}

// NewHinatazakaApiService creates a default api service
func NewHinatazakaApiService() HinatazakaApiServicer {
	return &HinatazakaApiService{}
}

// GetDiscographyId - Your GET endpoint
func (s *HinatazakaApiService) GetDiscographyId(id string) (interface{}, error) {
	// TODO - update GetDiscographyId with the required logic for this service method.
	// Add api_hinatazaka_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'GetDiscographyId' not implemented")
}

// GetMemberId - 
func (s *HinatazakaApiService) GetMemberId(id int64) (interface{}, error) {
	// TODO - update GetMemberId with the required logic for this service method.
	// Add api_hinatazaka_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'GetMemberId' not implemented")
}

// PostMemberId - 
func (s *HinatazakaApiService) PostMemberId(id string, member Member) (interface{}, error) {
	// TODO - update PostMemberId with the required logic for this service method.
	// Add api_hinatazaka_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'PostMemberId' not implemented")
}
