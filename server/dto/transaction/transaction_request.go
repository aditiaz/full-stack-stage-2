package transactiondto

import (
	"housy/models"
	"time"
)

type CreateTransactionRequest struct {
	CheckIn    time.Time    `json:"checkin"`
	CheckOut   time.Time    `json:"checkout"`
	HouseID    int          `json:"houseid" form:"houseid" validate:"required"`
	House      models.House `json:"house"`
	UserID     int          `json:"userid" form:"userid" validate:"required"`
	User       models.User  `json:"user"`
	Total      string       `json:"total" form:"total" validate:"required"`
	Status     string       `json:"status" form:"status" validate:"required"`
	Attachment string       `json:"attachment" form:"attachment" validate:"required"`
	CreatedAt  time.Time    `json:"created_at"`
	UpdatedAt  time.Time    `json:"updated_at"`
}

type UpdateTransactionRequest struct {
	Status string `json:"status" form:"status"`
}
