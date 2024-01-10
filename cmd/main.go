package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/ydkulks/GoBeyondJS/server"
)

func main() {
  e := echo.New()

  e.Use(middleware.CORS())

  server.Api_endpoints(e)
  server.Templates(e)

  e.Logger.Fatal(e.Start(":8080"))
}
