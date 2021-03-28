package app

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

type Repo interface {
	GetListings() ([]Listing, error)
}

type repo struct {
	db *sql.DB
}

func NewRepo(db *sql.DB) Repo {
	return &repo{db: db}
}

func (r *repo) GetListings() ([]Listing, error) {
	fmt.Println("made it to get listings!")

	sql, args, err := sq.Select("id, title, description, creator_id, created_at").
		From("listings").
		Where(sq.Eq{
			"deleted_at": nil,
		}).ToSql()

	if err != nil {
		return nil, err
	}

	rows, err := r.db.Query(sql, args...)
	defer rows.Close()
	listings := make([]Listing, 0)

	for rows.Next() {
		var listing Listing
		if err := rows.Scan(&listing); err != nil {
			// Check for a scan error.
			// Query rows will be closed with defer.
			log.Fatal(err)
		}
		listings = append(listings, listing)
	}

	// Rows.Err will report the last error encountered by Rows.Scan.
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	return listings, nil

}
