import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Form } from "./style";
import { ILogin } from "./types";

export const Login = (props: ILogin) => {
  // tslint:disable-next-line: no-any
  const teste = useHistory();
  return (
    <Container>
      <Form>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <button onClick={() => teste.push("/questions")}>Logar</button>
        <button onClick={() => teste.push("/register")}>Cadastrar</button>
      </Form>
    </Container>
  );
};
