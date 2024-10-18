import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./ReviewPage.css";

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const timer = <p>90:00</p>;

  const questionData = [
    {
      question: 1,
      status: "Respondida",
      marked: "Sim",
      comment: "Revisar mais tarde",
    },
    { question: 2, status: "Não Respondida", marked: "Não", comment: "" },
    { question: 3, status: "Respondida", marked: "Não", comment: "" },
    {
      question: 4,
      status: "Não Respondida",
      marked: "Sim",
      comment: "Verificar opções",
    },
  ];

  const handleReview = () => {
    navigate("/");
  };

  const handleFinish = () => {
    navigate("/result");
  };

  return (
    <div>
      <Header centerItem={timer} />

      <div className="reviewButton">
        <Button onClick={handleReview} text="Revisar Todas" />
      </div>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Questão</th>
              <th>Status</th>
              <th>Marcada</th>
              <th>Comentário</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {questionData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{row.question}</td>
                <td>{row.status}</td>
                <td>{row.marked}</td>
                <td>{row.comment}</td>
                <td>
                  <Button onClick={handleReview} text="Revisar" size="small" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="finishButton">
        <Button onClick={handleFinish} text="Finalizar Prova" />
      </div>
    </div>
  );
};

export default ReviewPage;
