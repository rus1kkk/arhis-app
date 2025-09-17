import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" py={10}>
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Страница не найдена
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Запрашиваемая страница не существует.
        </Typography>
        <Button variant="contained" component={Link} to="/login" size="large">
          На главную
        </Button>
      </Box>
    </Container>
  );
};

export default ProfilePage;
