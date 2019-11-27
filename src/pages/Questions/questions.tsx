import { Base } from "assets/images";
import { callApi } from "helper";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Container } from "./style";
import { IQuestions } from "./types";

export const Questions = (props: IQuestions) => {
  const [question, setQuestion] = useState();
  const [resposta, setResposta] = useState();
  const history = useHistory();

  const getQuestionNow = async () => {
    const data = await callApi("GET", `questions`);
    if (data.res.status === 200) {
      if (data.text !== question) {
        setQuestion(data.text);
      }
    }
  };
  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      answer: resposta
    };
    const data = await callApi("POST", `answers/${question.id}`, body);
    if (data.res.status === 200) {
      if (data.text !== question) {
        getQuestionNow();
      }
    }
  };
  useEffect(() => {
    getQuestionNow();
  }, []);

  useEffect(() => {
    if (question === null) {
      history.push("/result");
    }
    // console.log(question)
  }, [question]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResposta(event.target.value);
  };

  return (
    <>
      <Container>
        <div className="questions">
          <div className="topo">{(question && question.question) || ""}</div>
          <div className="bottom">
            <img src={Base} />
            <form onSubmit={handleSumit}>
              {question ? (
                <>
                  {question.answer1 ? (
                    <label>
                      {question.answer1}
                      <input
                        type="radio"
                        value="1"
                        name="question"
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </label>
                  )}
                  {question.answer3 && (
                    <label>
                      {question.answer3}
                      <input
                        type="radio"
                        value="3"
                        name="question"
                        onChange={handleChange}
                      />
                    </label>
                  )}
                  {question.answer4 && (
                    <label>
                      {question.answer4}
                      <input
                        type="radio"
                        value="4"
                        name="question"
                        onChange={handleChange}
                      />
                    </label>
                  )}
                  <button>Proximo</button>
                </>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};
