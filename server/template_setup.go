package server

import (
  "html/template"
  "io"

  "github.com/labstack/echo/v4"
)

  type TemplateRenderer struct {
    templates *template.Template
  }

  func (t *TemplateRenderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {

    // Add global methods if data is a map
    if viewContext, isMap := data.(map[string]interface{}); isMap {
      viewContext["reverse"] = c.Echo().Reverse
    }

    return t.templates.ExecuteTemplate(w, name, data)
  }

func Templates(e *echo.Echo) {
  // Setting up renderer
  t := &TemplateRenderer{
    templates: template.Must(template.ParseGlob("server/templates/*.html")),
  }
  e.Renderer = t
}
