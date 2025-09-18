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
import logoWithText from "../assets/hiking.png";

import q1 from "../assets/testPage/testPhoto/q1.jpg";
//import fact1 from "../assets/testPage/factPhoto/fact1.jpg";
import q2 from "../assets/testPage/testPhoto/q2.jpg";
//import fact2 from "../assets/testPage/factPhoto/fact2.jpg";
import q3 from "../assets/testPage/testPhoto/q3.jpg";
//import fact3 from "../assets/testPage/factPhoto/fact3.jpg";

const TestPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFact, setShowFact] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // данные с вопросами для теста
  const questions = [
    {
      id: 1,
      text: "Что, согласно тексту, характерно для орнаментов и украшений в Аланском костюме?",
      image: q1,
      options: [
        { id: "1", text: "Реалистичные портреты людей" },
        {
          id: "2",
          text: "Геометрические фигуры и стилизованные изображения животных",
        },
        { id: "3", text: "Современные абстрактные узоры" },
        { id: "4", text: "Только растительные мотивы" },
      ],
      correctAnswerId: "2",
      fact: {
        text: "Аланские костюмы часто украшались геометрическими орнаментами и изображениями животных, что отражало их мировоззрение и культурные традиции.",
        //image: fact1,
      },
    },
    {
      id: 2,
      text: "Чем характеризуется алевролит, согласно тексту?",
      image: q2,
      options: [
        {
          id: "1",
          text: "Крупнозернистой структурой и высоким содержанием кварца",
        },
        {
          id: "2",
          text: "Сцементированными частицами размером между песком и глиной",
        },
        { id: "3", text: "Образованием исключительно в речных долинах" },
        { id: "4", text: "Образованием в девонское время" },
      ],
      correctAnswerId: "2",
      fact: {
        text: "Алевролит — осадочная порода, состоящая из частиц размером между песком и глиной, скреплённых цементом.",
        //image: fact2,
      },
    },
    {
      id: 3,
      text: "Какая особенность характерна для базальта с перевала Федосеева, согласно тексту?",
      image: q3,
      options: [
        {
          id: "1",
          text: "Имеет розовый цвет и крупные кристаллы полевого шпата",
        },
        {
          id: "2",
          text: "Обладает тёмно-зелёным цветом, хлоритизирован и интенсивно рассланцован",
        },
        {
          id: "3",
          text: "Содержит многочисленные окаменелости древних организмов",
        },
        {
          id: "4",
          text: "Образуется исключительно на дне океанов и не встречается на суше",
        },
      ],
      correctAnswerId: "2",
      fact: {
        text: "Базальт с перевала Федосеева уникален своим тёмно-зелёным цветом и сильной сланцеватостью, вызванной геологическими процессами.",
        //image: fact3,
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
