package server

import (
	"math/rand"
	"net/http"
	"strconv"
	"time"

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

  e.GET("/api/post", func(c echo.Context) error {
    // get random tweet from api
    tweet := "nested ternaries are bad and you should feel bad using them"
    data := map[string]interface{}{
      "name": "ThePrimeagen",
      "username": "@" + "ThePrimeagen",
      "tweet": tweet,
    }
    time.Sleep(3*time.Second)
    return c.Render(http.StatusOK, "post.html",data)
  })

  var current_state = 0
  e.GET("/api/pooling", func(c echo.Context) error {
    current_state = progress_me_daddy(current_state)
    data := map[string]interface{}{
      "progress": current_state,
    }
    if current_state > 100 {
      current_state = 0
      return c.String(286,`<p>Completed!</p>`)
    }
    return c.Render(http.StatusOK, "pooling.html",data)
  })
}

func progress_me_daddy(prev int) int{
  var rand = rand.Intn(10) + 1
  return prev + rand
}
