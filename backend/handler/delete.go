package handler

import (
	"example.com/todoapp/model"
	"github.com/labstack/echo/v4"
)

func Delete(c echo.Context) error {
	id := c.Param("id")

	model.Delete(id)

	return c.NoContent(200)
}
