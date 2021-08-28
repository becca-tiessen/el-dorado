package app

type Service interface {
	GetListings() ([]Listing, error)
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

func (s *service) CreateListing() error {
	return s.repo.CreateListing()
}
