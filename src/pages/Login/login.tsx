import { callApi } from "helper";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form } from "./style";
import { ILogin } from "./types";

export const Login = (props: ILogin) => {
  // tslint:disable-next-line: no-any

  const [forms, setForms] = useState({
    email: "",
    password: ""
  });
  const history = useHistory();
  // tslint:disable-next-line: no-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      email: forms.email,
      password: forms.password
    };
    const data = await callApi("POST", "sessions", body);
    if (data.res.status === 200) {
      localStorage.setItem("token", data.text.token);
      history.push("/questions");
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          // tslint:disable-next-line: no-any
          onChange={(e: any) => setForms({ ...forms, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          // tslint:disable-next-line: no-any
          onChange={(e: any) =>
            setForms({ ...forms, password: e.target.value })
          }
        />
        <button type="submit">Logar</button>
        <button onClick={() => history.push("/register")}>Cadastrar</button>
      </Form>
    </Container>
  );
};
