package app

import (
	sq "github.com/Masterminds/squirrel"
	"github.com/jmoiron/sqlx"

	_ "github.com/go-sql-driver/mysql"
)

type Repo interface {
	GetListings() ([]Listing, error)
}

type repo struct {
	db *sqlx.DB
}

func NewRepo(db *sqlx.DB) Repo {
	return &repo{db: db}
}

func (r *repo) GetListings() ([]Listing, error) {
	sql, args, err := sq.Select("id, name, latitude, longitude").
		From("listings").
		Where(sq.Eq{
			"deleted_at": nil,
		}).ToSql()

	if err != nil {
		return nil, err
	}

	var listings []Listing
	err = r.db.Select(&listings, sql, args...)
	if err != nil {
		return nil, err
	}

	return listings, nil
}
