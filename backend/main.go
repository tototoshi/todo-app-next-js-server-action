package main

import (
	"example.com/todoapp/handler"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/", handler.Home)
	e.GET("/todos", handler.All)
	e.POST("/todos", handler.Create)
	e.GET("/todos/:id", handler.Find)
	e.POST("/todos/:id", handler.Update)
	e.DELETE("/todos/:id", handler.Delete)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}
