import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./QuestionPage.css";

const QuestionsPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [textButton, setTextButton] = useState("Português");
  const [isEnglish, setIsEnglish] = useState(true);
  const navigate = useNavigate();
  const timer = <p>90:00</p>;

  const questions = [
    {
      "id": 1,
      "questionText": "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
      "options": [
        {
          "id": "A",
          "text": "EC2 launch type."
        },
        {
          "id": "B",
          "text": "Fargate launch type."
        },
        {
          "id": "C",
          "text": "Lightsail launch type."
        },
        {
          "id": "D",
          "text": "Lambda launch type."
        }
      ],
      "correctAnswer": "A",
      "selectedAnswer": "",
      "markedForReview": false,
      "commentForReview": ""
    },
    {
      "id": 2,
      "questionText": "Which service allows you to run containerized applications without managing the underlying servers?",
      "options": [
        {
          "id": "A",
          "text": "Amazon EC2"
        },
        {
          "id": "B",
          "text": "Amazon Fargate"
        },
        {
          "id": "C",
          "text": "AWS Lambda"
        },
        {
          "id": "D",
          "text": "Amazon Lightsail"
        }
      ],
      "correctAnswer": "B",
      "selectedAnswer": "",
      "markedForReview": false,
      "commentForReview": ""
    },
    {
      "id": 3,
      "questionText": "Which AWS service provides automatic scaling for EC2 instances?",
      "options": [
        {
          "id": "A",
          "text": "Elastic Load Balancing"
        },
        {
          "id": "B",
          "text": "Auto Scaling"
        },
        {
          "id": "C",
          "text": "Amazon RDS"
        },
        {
          "id": "D",
          "text": "Amazon CloudFront"
        }
      ],
      "correctAnswer": "B",
      "selectedAnswer": "",
      "markedForReview": false,
      "commentForReview": ""
    }
  ]

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    }

    navigate("/review");
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer("");
    }

    navigate("/");
  };

  const [question, setQuestion] = useState(
    questions[currentQuestionIndex].questionText
  );
  const [optionA, setOptionA] = useState(
    questions[currentQuestionIndex].options[0].text
  );
  const [optionB, setOptionB] = useState(
    questions[currentQuestionIndex].options[1].text
  );
  const [optionC, setOptionC] = useState(
    questions[currentQuestionIndex].options[2].text
  );
  const [optionD, setOptionD] = useState(
    questions[currentQuestionIndex].options[3].text
  );

  const translateText = async () => {
    const translate = async (text: string) => {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${text}&langpair=${
          isEnglish ? "en|pt" : "pt|en"
        }`
      );
      const data = await response.json();
      return data.responseData.translatedText;
    };

    // Traduzir a pergunta
    const translatedQuestion = await translate(question);
    setQuestion(translatedQuestion);

    // Traduzir as opções
    const translatedOptionA = await translate(optionA);
    const translatedOptionB = await translate(optionB);
    const translatedOptionC = await translate(optionC);
    const translatedOptionD = await translate(optionD);

    // Atualizar os estados com os textos traduzidos
    setOptionA(translatedOptionA);
    setOptionB(translatedOptionB);
    setOptionC(translatedOptionC);
    setOptionD(translatedOptionD);

    setIsEnglish(!isEnglish);
    setTextButton(isEnglish ? "Inglês" : "Português");
  };

  return (
    <div>
      <Header centerItem={timer} rightItem="01 de 65" />

      <div className="container">
        <Button onClick={translateText} text={textButton} />
        <h2>Questão 1</h2>
        <p className="question">{question}</p>

        <div className="options">
          <div className="option">
            <input type="radio" id="optionA" name="answer" value="A" />
            <label htmlFor="optionA">{optionA}</label>
          </div>
          <div className="option">
            <input type="radio" id="optionB" name="answer" value="B" />
            <label htmlFor="optionB">{optionB}</label>
          </div>
          <div className="option">
            <input type="radio" id="optionC" name="answer" value="C" />
            <label htmlFor="optionC">{optionC}</label>
          </div>
          <div className="option">
            <input type="radio" id="optionD" name="answer" value="D" />
            <label htmlFor="optionD">{optionD}</label>
          </div>
        </div>

        <div className="buttons">
          <Button onClick={handlePrevious} text="Previous (P)" />
          <Button onClick={handleNext} text="Next (N)" />
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
