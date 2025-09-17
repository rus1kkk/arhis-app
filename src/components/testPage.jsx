import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import logoWithText from "../assets/logoWithText.svg";

const TestPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Пример данных вопросов (замените на реальные данные из API)
  const questions = [
    {
      id: 1,
      text: "Какое время года вам нравится больше всего?",
      image: "https://via.placeholder.com/300x150?text=Весна",
      options: [
        { id: "1", text: "Весна" },
        { id: "2", text: "Лето" },
        { id: "3", text: "Осень" },
        { id: "4", text: "Зима" },
      ],
    },
    {
      id: 2,
      text: "Какой вид отдыха вы предпочитаете?",
      image: "https://via.placeholder.com/300x150?text=Активный+отдых",
      options: [
        { id: "1", text: "Активный отдых" },
        { id: "2", text: "Пляжный отдых" },
        { id: "3", text: "Экскурсионный туризм" },
        { id: "4", text: "Спокойный отдых на природе" },
      ],
    },
    {
      id: 3,
      text: "Какой бюджет вы планируете на отдых?",
      options: [
        { id: "1", text: "Экономный (до 30 000 руб.)" },
        { id: "2", text: "Средний (30 000 - 70 000 руб.)" },
        { id: "3", text: "Выше среднего (70 000 - 150 000 руб.)" },
        { id: "4", text: "Премиум (более 150 000 руб.)" },
      ],
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Завершение теста и переход к результатам
      navigate("/results", {
        state: {
          category,
          answers: [], // Здесь должны быть сохраненные ответы
        },
      });
    } else {
      // Переход к следующему вопросу
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer("");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, color: "white", padding: "16px" }}>
      {/* Шапка с логотипом и счетчиком вопросов */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: "text.primary",
          py: 2,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={logoWithText}
              alt="Курорт"
              style={{ width: "180px", height: "auto" }}
            />
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {currentQuestionIndex + 1} / {questions.length}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Заголовок вопроса */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "white",
            mb: 3,
          }}
        >
          Вопрос №{currentQuestionIndex + 1}
        </Typography>

        {/* Текст вопроса */}
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 4,
          }}
        >
          {currentQuestion.text}
        </Typography>

        {/* Изображение вопроса (если есть) */}
        {currentQuestion.image && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <img
              src={currentQuestion.image}
              alt="Иллюстрация к вопросу"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        )}

        {/* Варианты ответов */}
        <FormControl component="fieldset" sx={{ width: "100%", mb: 4 }}>
          <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
            {currentQuestion.options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={
                  <Radio
                    sx={{
                      py: 1,
                      "&.Mui-checked": {
                        color: "primary.main",
                      },
                    }}
                  />
                }
                label={<Typography variant="body1">{option.text}</Typography>}
                sx={{
                  border: "1px solid",
                  borderColor:
                    selectedAnswer === option.id ? "primary.main" : "grey.300",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  marginBottom: "12px",
                  backgroundColor:
                    selectedAnswer === option.id
                      ? "primary.light"
                      : "transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "primary.light",
                  },
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {/* Кнопка Продолжить */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleNext}
            disabled={!selectedAnswer}
            sx={{
              minWidth: "200px",
              border: "solid 3px white",
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "white",
            }}
          >
            {isLastQuestion ? "Завершить тест" : "Продолжить"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TestPage;
