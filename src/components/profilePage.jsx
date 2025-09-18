import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Chip,
  Paper,
  colors,
} from "@mui/material";
import { Link } from "react-router-dom";
import logoWithText from "../assets/hiking.png";
import ResultsTable from "./resultsTable";
import BasicAvatar from "../assets/avatar.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HikingIcon from "@mui/icons-material/Hiking";

const ProfilePage = () => {
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
        {/* <Box>
          <img
            src={logoWithText}
            alt="Курорт"
            style={{ width: "180px", height: "auto" }}
          />
        </Box> */}
        <Box sx={{ marginTop: "40px", display: "flex", gap: "40px" }}>
          <Avatar
            alt="Basic avatar"
            src={BasicAvatar}
            sx={{ width: 115, height: 115 }}
            variant="rounded"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body"
              sx={{ fontSize: "24px", fontWeight: "600", color: "white" }}
            >
              Иванов Иван
            </Typography>
            <Typography
              variant="body"
              sx={{ fontSize: "16px", fontWeight: "300", color: "grey" }}
            >
              example@mail.com
            </Typography>
            <Box>
              <Chip
                icon={<HikingIcon />}
                label="ПЕРВООТКРЫВАТЕЛЬ"
                color="blue"
                size="small"
              />
              <Chip
                icon={<EmojiEventsIcon />}
                label="ЧЕМПИОН"
                color="yellow"
                size="small"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "15px", margin: "20px" }}>
          <Paper
            elevation={4}
            sx={{
              width: 96,
              height: 96,
              textAlign: "center",
              color: "grey",
              paddingTop: "3%",
            }}
          >
            Место
            <Typography sx={{ color: "black", fontSize: "32px" }}>
              13
            </Typography>
          </Paper>
          <Paper
            elevation={4}
            sx={{
              width: 96,
              height: 96,
              textAlign: "center",
              color: "grey",
              paddingTop: "3%",
            }}
          >
            Результат
            <Typography sx={{ color: "red", fontSize: "32px" }}>6</Typography>
          </Paper>
          <Paper
            elevation={4}
            sx={{
              width: 96,
              height: 96,
              textAlign: "center",
              color: "grey",
              paddingTop: "3%",
            }}
          >
            Время
            <Typography sx={{ color: "#FD6A02", fontSize: "32px" }}>
              10:00
            </Typography>
          </Paper>
        </Box>
        <ResultsTable />
      </Box>
    </Container>
  );
};

export default ProfilePage;
