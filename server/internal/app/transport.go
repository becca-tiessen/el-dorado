package app

import (
	"context"
	"errors"

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

func MakeCreateListingEndpoint(svc Service) endpoint.Endpoint {
	return func(_ context.Context, request interface{}) (interface{}, error) {
		req, ok := request.(createListingRequest)
		if !ok {
			return createListingResponse{}, errors.New("Invalid Request")
		}

		listing, err := svc.CreateListing(req)
		if err != nil {
			return nil, err
		}
		return createListingResponse{}, nil
	}
}

type getListingsResponse struct {
	Listings []Listing `json:"listings"`
}

type createListingRequest struct {
	Listing Listing `json:"listing"`
}

type createListingResponse struct{}
