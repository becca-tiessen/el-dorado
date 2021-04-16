package main

import (
	"context"
	"encoding/json"
	"net/http"

	"el-dorado/server/internal/app"

	httptransport "github.com/go-kit/kit/transport/http"
	"github.com/jmoiron/sqlx"
)

func main() {
	db, err := sqlx.Connect("mysql", "root:password@tcp(127.0.0.1:3318)/el-dorado?parseTime=true")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	repo := app.NewRepo(db)

	svc := app.NewService(repo)

	listingsHandler := httptransport.NewServer(
		app.MakeGetListingsEndpoint(svc),
		decodeGetListingsRequest,
		encodeResponse,
	)

	http.Handle("/listings", listingsHandler)

	http.ListenAndServe(":8080", nil)
}

func decodeGetListingsRequest(_ context.Context, r *http.Request) (interface{}, error) {
	return r, nil
}

func encodeResponse(_ context.Context, w http.ResponseWriter, response interface{}) error {
	return json.NewEncoder(w).Encode(response)
}
