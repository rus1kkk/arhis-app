import { useState } from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logoWithText from "../assets/logoWithText.svg";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "7-14", label: "7-14 лет", color: "#ff9800" },
    { id: "14-21", label: "14-21 лет", color: "#4caf50" },
    { id: "21-35", label: "21-35 лет", color: "#2196f3" },
    { id: "35-60", label: "35-60 лет", color: "#006FFF" },
  ];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Box textAlign="center" py={3}>
          <img
            src={logoWithText}
            alt="Курорт"
            style={{ width: "250px", height: "auto", marginBottom: "1rem" }}
          />
        </Box>

        <Typography
          component="h2"
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "white", mb: 1 }}
        >
          Выберите свою возрастную категорию
        </Typography>

        <Typography variant="body2" align="center" color="grey" sx={{ mb: 4 }}>
          Далее вы пройдете тест
        </Typography>

        <Stack
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "350px",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedCategory === category.id ? "outlined" : "contained"
              }
              sx={{
                backgroundColor:
                  selectedCategory === category.id
                    ? "transparent"
                    : category.color,
                color:
                  selectedCategory === category.id ? category.color : "white",
                border:
                  selectedCategory === category.id
                    ? `2px solid ${category.color}`
                    : "none",
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === category.id
                      ? "rgba(0, 0, 0, 0.04)"
                      : category.color,
                },
              }}
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </Stack>

        <Button
          variant="outlined"
          color="outlined"
          disabled={!selectedCategory}
          sx={{
            width: "350px",
            marginTop: "10%",
            alignSelf: "center",
            py: 1.5,
            fontSize: "1.1rem",
          }}
          component={Link}
          to={`/profile/category/test?category=${selectedCategory}`}
        >
          Продолжить
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryPage;
