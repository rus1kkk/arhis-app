import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import theme from "./theme/theme";
import "./theme/globalStyles.css";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage"; // Добавьте импорт
import CategoryPage from "./components/CategoryPage"; // Добавьте импорт и исправьте опечатку
import NotFoundPage from "./components/notFoundPage"; // Лучше создать компонент для 404

// Защищенный маршрут (пример реализации)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Простая проверка авторизации

  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile/category"
              element={
                <ProtectedRoute>
                  <CategoryPage />
                </ProtectedRoute>
              }
            />
            {/* Перенаправляем с корня на логин или другую страницу */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
