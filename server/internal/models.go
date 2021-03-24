package internal

import "github.com/shopspring/decimal"

type Listing struct {
	ID       int        `json:"id"`
	Address  string     `json:"address"`
	Location Coordinate `json:"location"`
}

type Coordinate struct {
	Latitude  decimal.Decimal `json:"latitude"`
	Longitude decimal.Decimal `json:"longitude"`
}
