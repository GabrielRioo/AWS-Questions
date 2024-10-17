import React from "react";
import CurrentDate from "../../utils/CurrentDate";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import './QuestionPage.css'

const QuestionsPage: React.FC = () => {
  const timer = <p>90:00</p>;
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/questions");
  };

  const handlePrevious = () => {
    navigate("/");
  };

  return (
    <div>
      <Header centerItem={timer} rightItem="01 de 65" />

      <div className="container">
        <h2>Questão 1</h2>
        <p className="question">
          A company wants to use Amazon Elastic Container Service (Amazon ECS)
          to run its containerized applications. For compliance reasons, the
          company wants to retain complete visibility and control over the
          underlying server cluster. Which Amazon ECS launch type will satisfy
          these requirements?
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
