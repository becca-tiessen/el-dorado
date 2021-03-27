package internal

import "github.com/shopspring/decimal"

type Listing struct {
	ID       int        `json:"id"`
	Name     string     `json:"name"`
	Address  string     `json:"address"`
	Location Coordinate `json:"location"`
}

type Coordinate struct {
	Latitude  decimal.Decimal `json:"lat"`
	Longitude decimal.Decimal `json:"lng"`
}
