package handlers

import (
	"encoding/json"
	housedto "housy/dto/house"
	dto "housy/dto/result"
	"housy/models"
	"housy/repositories"
	"net/http"
	"os"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type handlerhouse struct {
	HouseRepository repositories.HouseRepository
}

var path_file = "http://localhost:5000/uploads/"

func HandlerHouse(HouseRepository repositories.HouseRepository) *handlerhouse {
	return &handlerhouse{HouseRepository}
}

func (h *handlerhouse) FindHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	house, err := h.HouseRepository.FindHouse()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
	}

	for i, p := range house {
		imagePath := os.Getenv("PATH_FILE") + p.Image
		house[i].Image = imagePath
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: house}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerhouse) GetHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	house, err := h.HouseRepository.GetHouse(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	house.Image = os.Getenv("PATH_FILE") + house.Image

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: house}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerhouse) CreateHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	// userId := int(userInfo["id"].(float64))

	dataContex := r.Context().Value("dataFile")
	filename := dataContex.(string)

	cityid, _ := strconv.Atoi(r.FormValue("cityid"))
	request := housedto.CreateHouseRequest{
		Name:        r.FormValue("name"),
		Ameneties:   r.FormValue("ameneties"),
		Price:       r.FormValue("price"),
		Rent:        r.FormValue("rent"),
		BedRoom:     r.FormValue("bedroom"),
		BathRoom:    r.FormValue("bathroom"),
		Sqf:         r.FormValue("sqf"),
		Description: r.FormValue("description"),
		Address:     r.FormValue("price"),
		CityID:      cityid,
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	house := models.House{
		Name:        request.Name,
		Ameneties:   request.Ameneties,
		Price:       request.Price,
		Rent:        request.Rent,
		BedRoom:     request.BedRoom,
		BathRoom:    request.BathRoom,
		Sqf:         request.Sqf,
		Description: request.Description,
		Address:     request.Address,
		Image:       filename,
		CityID:      request.CityID,
		City:        request.City,
		// UserID: userId,
	}

	data, err := h.HouseRepository.CreateHouse(house)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, _ = h.HouseRepository.GetHouse(data.ID)

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerhouse) UpdateHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := new(housedto.UpdateHouseRequest)
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	house, err := h.HouseRepository.GetHouse(int(id))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	if request.Name != "" {
		house.Name = request.Name
	}

	if request.Ameneties != "" {
		house.Ameneties = request.Ameneties
	}

	if request.Price != "" {
		house.Price = request.Price
	}

	if request.Rent != "" {
		house.Rent = request.Rent
	}

	if request.BedRoom != "" {
		house.BedRoom = request.BedRoom
	}

	if request.BathRoom != "" {
		house.BathRoom = request.BathRoom
	}

	if request.Sqf != "" {
		house.Sqf = request.Sqf
	}

	if request.Description != "" {
		house.Description = request.Description
	}

	if request.Address != "" {
		house.Address = request.Address
	}

	data, err := h.HouseRepository.UpdateHouse(house)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerhouse) DeleteHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	house, err := h.HouseRepository.GetHouse(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err := h.HouseRepository.DeleteHouse(house)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func convertHouseResponse(u models.House) housedto.HouseResponse {
	return housedto.HouseResponse{
		ID:        u.ID,
		Name:      u.Name,
		CityID:    u.CityID,
		City:      u.City,
		Price:     u.Price,
		Rent:      u.Rent,
		Ameneties: u.Ameneties,
		BedRoom:   u.BedRoom,
		BathRoom:  u.BathRoom,
	}
}
