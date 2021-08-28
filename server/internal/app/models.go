package app

import (
	"time"

	"github.com/shopspring/decimal"
)

type Listing struct {
	ID        int64           `json:"id" db:"id"`
	Name      string          `json:"name" db:"name"`
	Latitude  decimal.Decimal `json:"lat" db:"latitude"`
	Longitude decimal.Decimal `json:"lng" db:"longitude"`
	CreatedAt time.Time       `json:"created_at`
	UpdatedAt *time.Time      `json:"updated_at"`
}
