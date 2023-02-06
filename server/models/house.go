// package models

// type House struct {
// 	ID          int    `json:"id"`
// 	Name        string `json:"name" form:"name" gorm:"type: varchar(255)"`
// 	Ameneties   string `json:"ameneties" gorm:"type: varchar(255)"`
// 	Price       string `json:"price" gorm:"type: varchar(255)"`
// 	Rent        string `json:"rent" gorm:"type: varchar(255)"`
// 	BedRoom     string `json:"bedroom" gorm:"type: varchar(255)"`
// 	BathRoom    string `json:"bathroom" gorm:"type: varchar(255)"`
// 	Sqf         string `json:"sqf" gorm:"type: varchar(255)"`
// 	Description string `json:"description" gorm:"type: varchar(255)"`
// 	Address     string `json:"address" gorm:"type: varchar(255)"`
// 	CityID      int    `json:"-"`
// 	City        City   `json:"city"`
// }

// func (House) TableName() string {
// 	return "houses"
// }

package models

import "time"

type House struct {
	ID          int       `json:"id"`
	Name        string    `json:"name" form:"name" gorm:"type: varchar(255)"`
	Ameneties   string    `json:"ameneties" gorm:"type: varchar(255)"`
	Price       string    `json:"price" gorm:"type: varchar(255)"`
	Rent        string    `json:"rent" gorm:"type: varchar(255)"`
	BedRoom     string    `json:"bedroom" gorm:"type: varchar(255)"`
	BathRoom    string    `json:"bathroom" gorm:"type: varchar(255)"`
	Sqf         string    `json:"sqf" gorm:"type: varchar(255)"`
	Description string    `json:"description" gorm:"type: varchar(255)"`
	Address     string    `json:"address" gorm:"type: varchar(255)"`
	Image       string    `json:"image" form:"image" gorm:"type: varchar(255)"`
	CityID      int       `json:"-"`
	City        City      `json:"city"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

func (House) TableName() string {
	return "houses"
}
