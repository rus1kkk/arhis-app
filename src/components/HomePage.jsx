import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import logoWithText from "../assets/hiking.png";
import mapImage from "../assets/map.png"; // твоя картинка карты

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0032C9",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Шапка */}
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 1,
            minHeight: "56px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logoWithText} alt="Архыз" style={{ width: "36px" }} />
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Цифровая тропа
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              color="inherit"
              href="/login"
              sx={{ fontSize: "12px", minWidth: "auto" }}
            >
              Войти
            </Button>
            <Button
              color="inherit"
              href="/registration"
              sx={{ fontSize: "12px", minWidth: "auto" }}
            >
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Герой-блок */}
      <Container sx={{ textAlign: "center", flex: 1, py: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "700", mb: 1, fontSize: "20px" }}
        >
          Добро пожаловать!
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, fontSize: "14px", px: 2 }}>
          Исследуй горы, получай знания и участвуй в фиджитал-приключении
        </Typography>

        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "white",
            color: "#0032C9",
            fontWeight: "600",
            px: 3,
            py: 1,
            borderRadius: "20px",
            mb: 4,
            fontSize: "14px",
          }}
          href="/registration"
        >
          Начать
        </Button>

        {/* Блок с картой */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={mapImage}
            alt="Карта тропы Архыз"
            style={{
              width: "100%",
              maxWidth: "340px",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
