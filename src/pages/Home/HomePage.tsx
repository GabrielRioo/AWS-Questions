import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import CurrentDate from "../../utils/CurrentDate";
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const timer = <p>90:00</p>;
  const userProfileButton = <CurrentDate />;
  const navigate = useNavigate(); 

  const handleStartTest = () => {
    navigate('/questions'); 
  };

  return (
    <div>
      <Header centerItem={timer} rightItem={userProfileButton} />

      <div className="container">
        <h1>INSTRUÇÕES INICIAIS</h1>
        <h2>1. Como Funciona o Exame da AWS</h2>
        <p>
          O exame da AWS é projetado para avaliar seu conhecimento sobre os
          serviços da Amazon Web Services e sua habilidade em utilizá-los de
          forma eficaz. Serão desconsideradas aleatoriamente 15 questões das 65
          apresentadas no exame oficial, e a aprovação é baseada na pontuação
          obtida nas 50 questões restantes.
        </p>

        <h2>2. Duração da Prova</h2>
        <ul>
          <li>
            O tempo total para a prova é de <strong>90 minutos</strong>.
          </li>
          <li>
            Não há pausas, portanto, a prova deve ser completada dentro desse
            período.
          </li>
        </ul>

        <h2>3. Instruções Gerais</h2>
        <ul>
          <li>
            O exame contém <strong>65 questões</strong> no total.
          </li>
          <li>Você poderá navegar entre as questões e marcar para revisão.</li>
          <li>
            Ao final,{" "}
            <strong>15 questões serão desconsideradas aleatoriamente</strong>. A
            pontuação será baseada nas 50 questões restantes.
          </li>
        </ul>

        <h2>4. Finalização da Prova</h2>
        <ul>
          <li>
            Ao finalizar o exame, você verá imediatamente se foi{" "}
            <strong>aprovado ou reprovado</strong>.
          </li>
          <li>
            O resultado incluirá:
            <ul>
              <li>
                As questões que você <strong>acertou</strong>
              </li>
              <li>
                As questões que você <strong>errou</strong>
              </li>
              <li>
                Uma análise sobre onde você pode <strong>melhorar</strong>
              </li>
            </ul>
          </li>
        </ul>

        <h2>5. Critérios de Aprovação</h2>
        <p>
          A prova é aprovada com base na pontuação obtida nas 50 questões
          válidas. Não há um número mínimo fixo de acertos necessário, mas um
          bom desempenho geral é fundamental.
        </p>

        <p className="good-luck">Boa sorte!</p>

        <div className="button-start">
          <Button onClick={handleStartTest} text="Iniciar Prova" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
