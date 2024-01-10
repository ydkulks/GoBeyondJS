package server

import (
  "net/http"
  "strconv"

  "github.com/labstack/echo/v4"
)

func Api_endpoints(e *echo.Echo) {
  // AJAX endpoints
  e.GET("/api/hx-ajax", func(c echo.Context) error {
    return c.String(http.StatusOK, "Issued a GET request!")
  })

  e.POST("/api/hx-ajax", func(c echo.Context) error {
    return c.String(http.StatusOK, "Issued a POST request!")
  })

  e.PUT("/api/hx-ajax", func(c echo.Context) error {
    return c.String(http.StatusOK, "Issued a PUT request!")
  })

  e.PATCH("/api/hx-ajax", func(c echo.Context) error {
    return c.String(http.StatusOK, "Issued a PATCH request!")
  })

  e.DELETE("/api/hx-ajax", func(c echo.Context) error {
    return c.String(http.StatusOK, "Issued a DELETE request!")
  })

  // Counter
  e.GET("/api/counter", func(c echo.Context) error {
    value := c.QueryParam("count")
    operation := c.QueryParam("operation")
    if operation == "plus" {
      temp, _ := strconv.Atoi(value)
      temp += 1
      value = strconv.Itoa(temp)
    } else if operation == "minus" {
      temp, _ := strconv.Atoi(value)
      temp -= 1
      value = strconv.Itoa(temp)
    }
    return c.String(http.StatusOK, value)
  })

  // Templates
  e.GET("/api/template/hello", func(c echo.Context) error {
    data := map[string]interface{}{
      "name": "User",
    }
    return c.Render(http.StatusOK, "hello.html",data)
  })
}
