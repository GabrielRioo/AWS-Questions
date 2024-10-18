import React from "react";
import Header from "../../components/Header/Header";
import CurrentDate from "../../utils/CurrentDate";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import './ResultPage.css'

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const userProfileButton = <CurrentDate />;

  const handleFinish = () => {
    navigate("/result");
  };

  const handleFini = () => {
    navigate("/result");
  };

  return (
    <div>
        <Header centerItem={<p>RESULTADO</p>} rightItem={userProfileButton}/>
      <div className="result-container">
        <h2>Status: <strong>Aprovado</strong></h2>

        <div className="result-summary">
          <p>
            Questões Acertadas: <strong>52 de 65</strong>
          </p>
          <p>
            Pontuação: <strong>720</strong>
          </p>
        </div>

        <h2>Performance por Domínio</h2>
        <table className="performance-table">
          <thead>
            <tr>
              <th>Domínio</th>
              <th>Porcentagem de Acerto</th>
              <th>Pontos de Melhoria</th>
              <th>Bom Desempenho</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Domínio 1: Conceitos de Nuvem</td>
              <td>85%</td>
              <td>Gerenciamento de recursos</td>
              <td>Modelos de implantação</td>
            </tr>
            <tr>
              <td>Domínio 2: Segurança e Conformidade</td>
              <td>75%</td>
              <td>Gerenciamento de identidade</td>
              <td>Criptografia de dados</td>
            </tr>
            <tr>
              <td>Domínio 3: Tecnologia e Serviços</td>
              <td>90%</td>
              <td>Monitoramento de serviços</td>
              <td>Integração de serviços</td>
            </tr>
            <tr>
              <td>Domínio 4: Cobrança, Preço, Suporte</td>
              <td>60%</td>
              <td>Modelos de cobrança</td>
              <td>Otimização de custos</td>
            </tr>
          </tbody>
        </table>

        <div className="result-actions">
          <Button onClick={handleFinish} text="Revisar Questoes" />
          <Button onClick={handleFinish} text="Refazer Prova" />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
