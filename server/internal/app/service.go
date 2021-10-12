package app

type Service interface {
	GetListings() (listings []Listing, err error)
	CreateListing(listing Listing) (newList Listing, err error)
}

type service struct {
	repo Repo
}

func NewService(repo Repo) Service {
	return &service{
		repo: repo,
	}
}

func (s *service) GetListings() ([]Listing, error) {
	return s.repo.GetListings()
}

func (s *service) CreateListing(li Listing) (Listing, error) {
	return s.repo.CreateListing(li)
}
