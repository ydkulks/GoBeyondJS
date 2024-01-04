package main

import (
  "github.com/labstack/echo/v4"
)

func main() {
  e := echo.New()
  e.Static("/", "./public")
  e.Static("/login", "./public/login")
  e.Logger.Fatal(e.Start(":8080"))
}
