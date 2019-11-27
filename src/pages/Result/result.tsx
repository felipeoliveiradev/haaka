import { Base } from "assets/images";
import React, { FormEvent, useState } from "react";
import { Container } from "./style";
import { IResult } from "./types";

export const Result = (props: IResult) => {
  const [question] = useState({
    question:
      "Você autoriza enviar seus dados para empresas de desenvolvimento?",
    // tslint:disable-next-line: object-literal-sort-keys
    answer1: "sim",
    answer2: "nao"
  });
  const [obrigado, setObrigado] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setObrigado(true);
  };

  return (
    <>
      <Container>
        <div className="questions">
          <div className="topo">{!obrigado ? "Você é mais proximo de front" || "" : ""}</div>
          <div className="bottom">
            <img src={Base} />
            <label className="texto2">{!obrigado ? "Posso te encaminhar para o mercado de trabalho que é totalmente inclusiva?" || "" : ""}</label>
            <form onSubmit={handleSubmit}>
              {!obrigado ? (
                <>
                  {question ? (
                    <>
                      {question.answer1 ? (
                        <label>
                          {question.answer1}
                          <input
                            type="radio"
                            value="1"
                            name="question"
                          />
                        </label>
                      ) : (
                        ""
                      )}
                      {question.answer2 && (
                        <label>
                          {question.answer2}
                          <input
                            type="radio"
                            value="2"
                            name="question"
                          />
                        </label>
                      )}
                      <button>Proximo</button>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <label>Obrigado por participar não abandonaremos você !</label>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};
