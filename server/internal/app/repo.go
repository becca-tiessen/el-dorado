package app

import (
	"errors"
	"time"

	sq "github.com/Masterminds/squirrel"
	"github.com/jmoiron/sqlx"

	_ "github.com/go-sql-driver/mysql"
)

type Repo interface {
	GetListings() ([]Listing, error)
	CreateListing(Listing) (Listing, error)
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

func (r *repo) CreateListing(li Listing) (Listing, error) {
	now := time.Now().UTC()

	sql, args, err := sq.Insert("listings").
		SetMap(sq.Eq{
			"name":       li.Name,
			"latitude":   li.Latitude.String(),
			"longitude":  li.Longitude.String(),
			"created_at": now,
		}).
		ToSql()
	if err != nil {
		return Listing{}, errors.New("error building create listing query")
	}

	result, err := r.db.Exec(sql, args...)
	if err != nil {
		return Listing{}, errors.New("error creating listing")
	}

	id, err := result.LastInsertId()
	if err != nil {
		return Listing{}, errors.New("error getting listing ID")
	}

	li.ID = id

	return li, nil
}
