// package models

// type City struct {
// 	ID   int    `json:"id"`
// 	Name string `json:"name" gorm:"type: varchar(255)"`
// }

// func (City) TableName() string {
// 	return "city"
// }

package models

import "time"

type City struct {
	ID        int       `json:"id"`
	Name      string    `json:"name" gorm:"type: varchar(255)"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (City) TableName() string {
	return "cities"
}
