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
  Fade,
  Card,
  CardContent,
} from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import logoWithText from "../assets/logoWithText.svg";

const TestPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFact, setShowFact] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Пример данных вопросов с фактами
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
      fact: {
        text: "Знаете ли вы, что весной люди чаще влюбляются? Исследования показывают, что увеличение солнечного света повышает уровень серотонина и окситоцина!",
        image: "https://via.placeholder.com/300x150?text=Факт+о+весне",
      },
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
      fact: {
        text: "Интересный факт: активный отдых снижает риск сердечно-сосудистых заболеваний на 35%! Регулярная физическая активность также улучшает настроение и качество сна.",
        image: "https://via.placeholder.com/300x150?text=Факт+об+отдыхе",
      },
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
      fact: {
        text: "Знаете ли вы? 78% людей считают, что лучшие воспоминания остаются от путешествий, а не от купленных вещей. Вложения в опыт часто приносят больше счастья, чем материальные покупки!",
        image: "https://via.placeholder.com/300x150?text=Факт+о+бюджете",
      },
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleAnswerSubmit = () => {
    // Сохраняем ответ и показываем факт
    setAnsweredQuestions((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        answer: selectedAnswer,
      },
    ]);
    setShowFact(true);
  };

  const handleNext = () => {
    if (showFact) {
      // Переходим к следующему вопросу или завершаем тест
      setShowFact(false);
      setSelectedAnswer("");

      if (isLastQuestion) {
        navigate("/results", {
          state: {
            category,
            answers: answeredQuestions,
          },
        });
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    } else {
      // Показываем факт после выбора ответа
      handleAnswerSubmit();
    }
  };

  return (
    <Box
      sx={{ flexGrow: 1, color: "white", padding: "16px", minHeight: "100vh" }}
    >
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
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {currentQuestionIndex + 1} / {questions.length}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        {!showFact ? (
          // Вопрос и варианты ответов
          <Fade in={!showFact} timeout={500}>
            <Box>
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
                  color: "white",
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
                <RadioGroup
                  value={selectedAnswer}
                  onChange={handleAnswerChange}
                >
                  {currentQuestion.options.map((option) => (
                    <FormControlLabel
                      key={option.id}
                      value={option.id}
                      control={
                        <Radio
                          sx={{
                            py: 1,
                            color: "white",
                            "&.Mui-checked": {
                              color: "primary.main",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography variant="body1" sx={{ color: "white" }}>
                          {option.text}
                        </Typography>
                      }
                      sx={{
                        border: "1px solid",
                        borderColor:
                          selectedAnswer === option.id
                            ? "primary.main"
                            : "rgba(255,255,255,0.3)",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        marginBottom: "12px",
                        backgroundColor:
                          selectedAnswer === option.id
                            ? "rgba(25, 118, 210, 0.2)"
                            : "rgba(255, 255, 255, 0.1)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          backgroundColor: "rgba(25, 118, 210, 0.2)",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </Fade>
        ) : (
          // Интересный факт
          <Fade in={showFact} timeout={500}>
            <Box>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "primary.main",
                  textAlign: "center",
                }}
              >
                📚 Интересный факт
              </Typography>

              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  mb: 4,
                }}
              >
                <CardContent>
                  {currentQuestion.fact.image && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <img
                        src={currentQuestion.fact.image}
                        alt="Иллюстрация факта"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    {currentQuestion.fact.text}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Fade>
        )}

        {/* Кнопка Продолжить */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleNext}
            disabled={!showFact && !selectedAnswer}
            sx={{
              minWidth: "200px",
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "white",
              border: "solid 2px white",
              backgroundColor: showFact ? "secondary.main" : "primary.main",
              "&:hover": {
                backgroundColor: showFact ? "secondary.dark" : "primary.dark",
              },
            }}
          >
            {showFact
              ? isLastQuestion
                ? "Узнать результаты"
                : "Следующий вопрос"
              : "Ответить"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TestPage;
