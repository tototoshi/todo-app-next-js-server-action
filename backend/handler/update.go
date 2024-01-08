package handler

import (
	"net/http"

	"example.com/todoapp/model"
	"github.com/labstack/echo/v4"
)

func Update(c echo.Context) error {
	id := c.Param("id")

	todo := model.Find(id)
	if todo == nil {
		return echo.NewHTTPError(http.StatusNotFound, "todo not found")
	}

	title := c.FormValue("title")
	if title != "" {
		todo.Title = title
	}

	model.Save(todo)

	return c.JSON(http.StatusCreated, todo)
}
