package housedto

import (
	"housy/models"
	"time"
)

type HouseResponse struct {
	ID          int         `json:"id"`
	Name        string      `json:"name" form:"name"`
	Ameneties   string      `json:"ameneties" form:"ameneties"`
	Price       string      `json:"price" form:"price"`
	Rent        string      `json:"rent" form:"rent"`
	BedRoom     string      `json:"bedroom" form:"bedroom"`
	BathRoom    string      `json:"bathroom" form:"bathroom"`
	Sqf         string      `json:"sqf" form:"sqf"`
	Description string      `json:"description" form:"description"`
	Address     string      `json:"address" form:"address"`
	Image       string      `json:"image" form:"image"`
	CityID      int         `json:"-"`
	City        models.City `json:"city"`
	CreatedAt   time.Time   `json:"created_at"`
	UpdatedAt   time.Time   `json:"updated_at"`
}
