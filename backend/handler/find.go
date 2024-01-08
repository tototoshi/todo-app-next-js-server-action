package handler

import (
	"net/http"

	"example.com/todoapp/model"
	"github.com/labstack/echo/v4"
)

func Find(c echo.Context) error {
	id := c.Param("id")
	todo := model.Find(id)
	if todo == nil {
		return echo.NewHTTPError(http.StatusNotFound, "todo not found")
	}
	return c.JSON(http.StatusOK, todo)
}
