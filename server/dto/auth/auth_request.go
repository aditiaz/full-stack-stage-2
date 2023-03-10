package authdto

import (
	"housy/models"
	"time"
)

type RegisterRequest struct {
	Fullname  string      `gorm:"type: varchar(255)" json:"fullname" validate:"required"`
	Username  string      `gorm:"type: varchar(255)" json:"username" validate:"required"`
	Email     string      `gorm:"type: varchar(255)" json:"email" validate:"required"`
	Password  string      `gorm:"type: varchar(255)" json:"password" validate:"required"`
	RoleID    int         `gorm:"type: varchar(255)" json:"roleid"`
	Role      models.Role `json:"role"`
	Gender    string      `gorm:"type: varchar(255)" json:"gender" validate:"required"`
	Phone     string      `gorm:"type: varchar(255)" json:"phone" validate:"required"`
	Address   string      `gorm:"type: varchar(255)" json:"address" validate:"required"`
	CreatedAt time.Time   `json:"created_at"`
	UpdatedAt time.Time   `json:"updated_at"`
}

type LoginRequest struct {
	Username string `gorm:"type: varchar(255)" json:"username" validate:"required"`
	Password string `gorm:"type: varchar(255)" json:"password" validate:"required"`
}
