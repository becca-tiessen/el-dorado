package main

import (
	"encoding/json"
	"net/http"

	internal "el-dorado/server/internal/app"

	"github.com/jmoiron/sqlx"
)

func main() {
	http.HandleFunc("/listings", listingHandler)

	http.ListenAndServe(":8080", nil)
}

func listingHandler(w http.ResponseWriter, req *http.Request) {
	// dbCreds := os.Getenv("DB_CONNECTION")
	// fmt.Println("db creds", dbCreds)

	db, err := sqlx.Connect("mysql", "root:password@tcp(127.0.0.1:3318)/el-dorado?parseTime=true")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	repo := internal.NewRepo(db)

	listings, err := repo.GetListings()
	if err != nil {
		panic(err)
	}

	data, err := json.Marshal(listings)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(data))
}
