import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logoWithText from "../assets/logoWithText.svg";

const CategoryPage = () => {
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
        <Box textAlign="center" py={10}>
          <img
            src={logoWithText}
            alt="Курорт"
            style={{ width: "250px", height: "auto" }}
          />
        </Box>
        <Typography
          component="h2"
          variant="h5"
          align="center"
          gutterBottom
          color="white"
        >
          Выберите свою возрастную категорию
        </Typography>
        <Typography variant="body2" align="center" color="grey" sx={{ mb: 3 }}>
          Далее вы пройдете тест
        </Typography>

        <Stack
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "350px",
          }}
        >
          <Button variant="contained" color="orange">
            7-14
          </Button>
          <Button variant="contained" color="green">
            14-21
          </Button>
          <Button variant="contained" color="blue">
            21-35
          </Button>
          <Button variant="contained" color="darkblue">
            35-60
          </Button>
        </Stack>

        <Button variant="outlined" color="outlined">
          Продолжить
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryPage;
