package api

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"net/http"
)

func (s *Server) GetUser(c echo.Context) error {
	id := c.Param("id")
	if len(id) == 0 {
		c.Logger().Info(id)
		return fmt.Errorf("unable to get ID from query params")
	}

	u, err := s.UsersList.GetUserById(id)
	if err != nil {
		return fmt.Errorf("unable to get user with ID")
	}

	return c.JSON(http.StatusOK, u)
}

func (s *Server) ListUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, s.UsersList)
}
