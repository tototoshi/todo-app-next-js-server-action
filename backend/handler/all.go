package handler

import (
	"net/http"

	"example.com/todoapp/model"
	"github.com/labstack/echo/v4"
)

func All(c echo.Context) error {
	todo := model.All()
	if todo == nil {
		return echo.NewHTTPError(http.StatusNotFound, "todo not found")
	}
	return c.JSON(http.StatusOK, todo)
}
