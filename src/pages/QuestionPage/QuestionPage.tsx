import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import './QuestionPage.css'

const QuestionsPage: React.FC = () => {
  const timer = <p>90:00</p>;
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/review");
  };

  const handlePrevious = () => {
    navigate("/");
  };

  const [question, setQuestion] = useState('Uma empresa deseja usar o Amazon Elastic Container Service (Amazon ECS) para executar seus aplicativos em contêineres. Por razões de conformidade, a empresa deseja manter total visibilidade e controle sobre o cluster de servidores subjacente. Qual tipo de inicialização do Amazon ECS irá satisfazer esses requisitos?');
  const [textButton, setTextButton] = useState('Inglês');
  const [isEnglish, setIsEnglish] = useState(false);

  const translateText = async () => {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${question}&langpair=${isEnglish ? 'en|pt' : 'pt|en'}`
    );
    const data = await response.json();
    setQuestion(data.responseData.translatedText);

    setIsEnglish(!isEnglish);
    setTextButton(isEnglish ? 'Inglês' : 'Português');
  };

  return (
    <div>
      <Header centerItem={timer} rightItem="01 de 65" />

      <div className="container">
        <Button onClick={translateText} text={textButton} />
        <h2>Questão 1</h2>
        <p className="question">
          {question}
        </p>

        <div className="options">
          <div className="option">
            <input type="radio" id="optionA" name="answer" value="A" />
            <label htmlFor="optionA">EC2 launch type.</label>
          </div>
          <div className="option">
            <input type="radio" id="optionB" name="answer" value="B" />
            <label htmlFor="optionB">Fargate launch type.</label>
          </div>
          <div className="option">
            <input type="radio" id="optionC" name="answer" value="C" />
            <label htmlFor="optionC">Lightsail launch type.</label>
          </div>
          <div className="option">
            <input type="radio" id="optionD" name="answer" value="D" />
            <label htmlFor="optionD">Lambda launch type.</label>
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
