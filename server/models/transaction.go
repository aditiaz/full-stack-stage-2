// package models

// import "time"

// type Transaction struct {
// 	ID         int       `json:"id"`
// 	CheckIn    time.Time `json:"checkin"`
// 	CheckOut   time.Time `json:"checkout"`
// 	HouseID    int       `json:"houseid"`
// 	House      House     `json:"house"`
// 	UserID     int       `json:"userid"`
// 	User       User      `json:"user"`
// 	Total      string    `json:"total" gorm:"type: varchar(255)"`
// 	Status     string    `json:"status" gorm:"type: varchar(255)"`
// 	Attachment string    `json:"attachment" gorm:"type: varchar(255)"`
// }

package models

import "time"

type Transaction struct {
	ID         int       `json:"id"`
	CheckIn    time.Time `json:"checkin"`
	CheckOut   time.Time `json:"checkout"`
	HouseID    int       `json:"houseid"`
	House      House     `json:"house"`
	UserID     int       `json:"userid"`
	User       User      `json:"user"`
	Total      string    `json:"total" gorm:"type: varchar(255)"`
	Status     string    `json:"status" gorm:"type: varchar(255)"`
	Attachment string    `json:"attachment" gorm:"type: varchar(255)"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
}

func (Transaction) TableName() string {
	return "transactions"
}
