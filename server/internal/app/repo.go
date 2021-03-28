package app

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

type Repo interface {
	GetListings()
}

type repo struct {
	db *sql.DB
}

func NewRepo(db *sql.DB) Repo {
	return &repo{db: db}
}

func (r *repo) GetListings() {

}
