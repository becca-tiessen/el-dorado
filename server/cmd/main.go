package main

import (
	"encoding/json"
	"net/http"

	internal "el-dorado/server/internal/app"

	"github.com/shopspring/decimal"
)

func main() {
	http.HandleFunc("/listings", listingHandler)

	http.ListenAndServe(":8080", nil)
}

func listingHandler(w http.ResponseWriter, req *http.Request) {
	stubListings := []internal.Listing{
		{
			ID:      1,
			Address: "271 Lanark St",
			Location: internal.Coordinate{
				Latitude:  decimal.NewFromFloat(49.8688),
				Longitude: decimal.NewFromFloat(-97.1976),
			},
		},
		{
			ID:      2,
			Address: "879 Warsaw Ave",
			Location: internal.Coordinate{
				Latitude:  decimal.NewFromFloat(49.8673),
				Longitude: decimal.NewFromFloat(-97.1583),
			},
		},
	}

	data, err := json.Marshal(stubListings)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(data))
	// json.NewEncoder(w).Encode(data)
}
