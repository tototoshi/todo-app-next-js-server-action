package handler

import (
	"net/http"

	"example.com/todoapp/model"
	"github.com/labstack/echo/v4"
)

func Create(c echo.Context) error {
	title := c.FormValue("title")
	todo := model.New(title)
	model.Save(todo)
	return c.JSON(http.StatusCreated, todo)
}
