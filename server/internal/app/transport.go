package app

import (
	"context"

	"github.com/go-kit/kit/endpoint"
)

func MakeGetListingsEndpoint(svc Service) endpoint.Endpoint {
	return func(_ context.Context, request interface{}) (interface{}, error) {
		listings, err := svc.GetListings()
		if err != nil {
			return nil, err
		}
		return getListingsResponse{listings}, nil
	}
}

type getListingsResponse struct {
	Listings []Listing `json:"listings"`
}
