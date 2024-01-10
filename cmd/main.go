package main

import (
	"github.com/labstack/echo/v4"
	"github.com/ydkulks/GoBeyondJS/server"
)

func main() {
  e := echo.New()
  e.Static("/", "./public")
  e.Static("/htmx", "./public/htmx")
  e.Static("/go", "./public/go")

  // server.PageRouter(e)
  server.Api_endpoints(e)
  server.Templates(e)

  e.Logger.Fatal(e.Start(":8080"))
}
