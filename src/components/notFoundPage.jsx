// components/NotFoundPage.jsx
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logoWithText from "../assets/hiking.png";

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
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
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <img
            src={logoWithText}
            alt="Курорт"
            style={{ width: "250px", height: "auto" }}
          />
        </Box>
        <Box textAlign="center" py={10}>
          <Typography variant="h1" color="white" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" color="white" gutterBottom>
            Страница не найдена
          </Typography>
          <Typography variant="body1" color="grey" paragraph>
            Запрашиваемая страница не существует.
          </Typography>
          <Button variant="contained" component={Link} to="/login" size="large">
            На главную
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
