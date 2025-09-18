// src/pages/ShopPage.jsx
import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Chip,
  Avatar,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const products = [
  {
    id: 1,
    title: 'Скидка 10% в ресторан "Че? Горы!"',
    subtitle: "Ужин для двоих",
    discount: 10,
  },
  {
    id: 2,
    title: 'Скидка 10% в ресторан "Че? Горы!"',
    subtitle: "Завтрак в горах",
    discount: 10,
  },
  {
    id: 3,
    title: 'Скидка 10% в ресторан "Че? Горы!"',
    subtitle: "Кофе и десерт",
    discount: 10,
  },
  {
    id: 4,
    title: 'Скидка 10% в ресторан "Че? Горы!"',
    subtitle: "Семейный обед",
    discount: 10,
  },
];

const ShopPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0032C9",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Магазин
        </Typography>

        <Grid container spacing={2}>
          {products.map((p) => (
            <Grid key={p.id} item xs={12} sm={6} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                  height: "100%",
                }}
              >
                {/* Иконка кафе в круге */}
                <Avatar
                  sx={{
                    width: 88,
                    height: 88,
                    bgcolor: "white",
                    color: "#0032C9",
                    boxShadow: 2,
                  }}
                >
                  <RestaurantIcon sx={{ fontSize: 48 }} />
                </Avatar>

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, color: "white" }}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {p.subtitle}
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}
                >
                  <Chip
                    label={`-${p.discount}%`}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                      fontWeight: 700,
                      borderRadius: 1,
                    }}
                    size="small"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      color: "#0032C9",
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": { bgcolor: "#f0f0f0" },
                    }}
                    onClick={() => {
                      // TODO: добавить обработчик покупки/перехода
                      alert(`${p.title} — куплено (демо)`);
                    }}
                  >
                    Приобрести
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopPage;
