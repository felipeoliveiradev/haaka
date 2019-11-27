import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Form } from "./style";
import { IRegister } from "./types";

export const Register = (props: IRegister) => {
  const history = useHistory();
  return (
    <Container>
      <Form>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="lastname" placeholder="Sobrenome" />
        <input type="text" name="state" placeholder="Estado" />
        <input type="text" name="city" placeholder="Cidade" />
        <input type="telefone" name="phone" placeholder="Telefone" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <button onClick={() => history.push("/")}>Cadastrar</button>
      </Form>
    </Container>
  );
};
