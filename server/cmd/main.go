package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	internal "el-dorado/server/internal/app"
)

func main() {
	// dbCreds := os.Getenv("DB_CONNECTION")

	// db, err := sql.Open("mysql", dbCreds)
	// if err != nil {
	// 	panic(err)
	// }
	// defer db.Close()

	// db.SetConnMaxLifetime(time.Minute * 3)
	// db.SetMaxOpenConns(10)
	// db.SetMaxIdleConns(10)

	// repo := internal.NewRepo(db)

	http.HandleFunc("/listings", listingHandler)

	http.ListenAndServe(":8080", nil)
}

func listingHandler(w http.ResponseWriter, req *http.Request) {
	// stubListings := []internal.Listing{
	// 	{
	// 		ID:      1,
	// 		Address: "271 Lanark St",
	// 		Location: internal.Coordinate{
	// 			Latitude:  decimal.NewFromFloat(49.8688),
	// 			Longitude: decimal.NewFromFloat(-97.1976),
	// 		},
	// 	},
	// 	{
	// 		ID:      2,
	// 		Address: "879 Warsaw Ave",
	// 		Location: internal.Coordinate{
	// 			Latitude:  decimal.NewFromFloat(49.8673),
	// 			Longitude: decimal.NewFromFloat(-97.1583),
	// 		},
	// 	},
	// }

	dbCreds := os.Getenv("DB_CONNECTION")

	db, err := sql.Open("mysql", dbCreds)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	repo := internal.NewRepo(db)

	listings, err := repo.GetListings()
	fmt.Println(listings)

	data, err := json.Marshal(listings)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(data))
}
