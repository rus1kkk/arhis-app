import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Стилизованные компоненты
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: "solid #11BBCB 2px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  marginTop: theme.spacing(2),
  maxWidth: "100%",
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.common.white,
  whiteSpace: "nowrap",
  padding: theme.spacing(1.5),
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PositionCell = styled(TableCell)(({ theme, position }) => ({
  fontWeight: "bold",
  fontSize: "18px",
  color:
    position === 1
      ? "#FFD700" // золотой для 1 места
      : position === 2
      ? "#C0C0C0" // серебряный для 2 места
      : position === 3
      ? "#CD7F32" // бронзовый для 3 места
      : theme.palette.text.primary,
  padding: theme.spacing(1.5),
}));

// Замокированные данные
const mockData = [
  { id: 1, position: 1, name: "Иванов Алексей", result: "13/13", time: "2:15" },
  { id: 2, position: 2, name: "Петрова Мария", result: "12/13", time: "2:45" },
  {
    id: 3,
    position: 3,
    name: "Сидоров Дмитрий",
    result: "12/13",
    time: "3:10",
  },
  { id: 4, position: 4, name: "Кузнецова Анна", result: "11/13", time: "2:30" },
  { id: 5, position: 5, name: "Смирнов Иван", result: "11/13", time: "2:55" },
  { id: 6, position: 6, name: "Попов Сергей", result: "10/13", time: "3:20" },
  {
    id: 7,
    position: 7,
    name: "Васильева Елена",
    result: "10/13",
    time: "3:45",
  },
  { id: 8, position: 8, name: "Новиков Андрей", result: "9/13", time: "4:10" },
  { id: 9, position: 9, name: "Морозова Ольга", result: "8/13", time: "4:35" },
  { id: 10, position: 10, name: "Лебедев Павел", result: "7/13", time: "5:00" },
];

const ResultsTable = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{ padding: { xs: 1, sm: 2 }, width: "100%", boxSizing: "border-box" }}
    >
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          mb: 3,
          fontSize: isSmallScreen ? "1.5rem" : "2rem",
        }}
      >
        Список лидеров
      </Typography>

      <StyledTableContainer component={Paper}>
        <Table
          sx={{
            minWidth: isSmallScreen ? 300 : 600,
            width: "100%",
            tableLayout: "fixed",
          }}
          aria-label="таблица результатов"
        >
          <StyledTableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                sx={{
                  width: isSmallScreen ? "15%" : "10%",
                  padding: "12px 8px",
                }}
              >
                Место
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  width: isSmallScreen ? "40%" : "50%",
                  padding: "12px 8px",
                }}
              >
                Фамилия Имя
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  width: isSmallScreen ? "20%" : "20%",
                  padding: "12px 8px",
                }}
              >
                Результат
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  width: isSmallScreen ? "25%" : "20%",
                  padding: "12px 8px",
                }}
              >
                Время
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {mockData.map((row) => (
              <StyledTableRow key={row.id}>
                <PositionCell
                  component="th"
                  scope="row"
                  align="center"
                  position={row.position}
                  sx={{
                    width: isSmallScreen ? "15%" : "10%",
                    padding: "12px 8px",
                  }}
                >
                  {row.position}
                </PositionCell>
                <TableCell
                  sx={{
                    width: isSmallScreen ? "40%" : "50%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: "12px 8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        width: isSmallScreen ? 32 : 40,
                        height: isSmallScreen ? 32 : 40,
                        mr: isSmallScreen ? 1 : 2,
                        bgcolor:
                          row.position <= 3 ? "primary.main" : "grey.400",
                        fontSize: isSmallScreen ? "0.8rem" : "1rem",
                      }}
                    >
                      {row.name.split(" ")[0][0]}
                      {row.name.split(" ")[1][0]}
                    </Avatar>
                    <Box sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                      {isSmallScreen ? (
                        <>
                          <div>{row.name.split(" ")[0]}</div>
                          <div>{row.name.split(" ")[1]}</div>
                        </>
                      ) : (
                        row.name
                      )}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    width: isSmallScreen ? "20%" : "20%",
                    padding: "12px 8px",
                    whiteSpace: "nowrap", // Убираем перенос текста
                    overflow: "visible", // Убираем обрезку
                    textOverflow: "clip", // Убираем многоточие
                  }}
                >
                  <Chip
                    label={row.result}
                    size={isSmallScreen ? "small" : "medium"}
                    color={
                      row.result === "13/13"
                        ? "success"
                        : row.result >= "11/13"
                        ? "primary"
                        : row.result >= "9/13"
                        ? "default"
                        : "error"
                    }
                    variant="outlined"
                  />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    width: isSmallScreen ? "25%" : "20%",
                    padding: "12px 8px",
                    whiteSpace: "nowrap", // Убираем перенос текста
                    overflow: "visible", // Убираем обрезку
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "medium",
                      color: "text.secondary",
                      fontSize: isSmallScreen ? "0.9rem" : "1rem",
                    }}
                  >
                    {row.time}
                  </Typography>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};

export default ResultsTable;
