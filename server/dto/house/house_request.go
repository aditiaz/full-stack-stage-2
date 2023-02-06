package housedto

import (
	"housy/models"
	"time"
)

type CreateHouseRequest struct {
	Name        string `json:"name" form:"name" validate:"required"`
	Ameneties   string `json:"ameneties" form:"ameneties" validate:"required"`
	Price       string `json:"price" form:"price" validate:"required"`
	Rent        string `json:"rent" form:"rent" validate:"required"`
	BedRoom     string `json:"bedroom" form:"bedroom" validate:"required"`
	BathRoom    string `json:"bathroom" form:"bathroom" validate:"required"`
	Sqf         string `json:"sqf" form:"sqf" validate:"required"`
	Description string `json:"description" form:"description" validate:"required"`
	Address     string `json:"address" form:"address" validate:"required"`
	// Image       string      `json:"image" form:"image" validate:"required"`
	CityID    int         `json:"cityid" form:"cityid" validate:"required"`
	City      models.City `json:"-"`
	CreatedAt time.Time   `json:"created_at"`
	UpdatedAt time.Time   `json:"updated_at"`
}

type UpdateHouseRequest struct {
	Name        string `json:"name" form:"name"`
	Ameneties   string `json:"ameneties" form:"ameneties"`
	Price       string `json:"price" form:"price"`
	Rent        string `json:"rent" form:"rent"`
	BedRoom     string `json:"bedroom" form:"bedroom"`
	BathRoom    string `json:"bathroom" form:"bathroom"`
	Sqf         string `json:"sqf" form:"sqf" validate:"required"`
	Description string `json:"description" form:"description"`
	Address     string `json:"address" form:"address"`
	// Image       string    `json:"image" form:"image"`
	CityID    int       `json:"cityid" form:"cityid"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
