import { callApi } from "helper";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form } from "./style";
import { IRegister } from "./types";

export const Register = (props: IRegister) => {
  const [register, setRegister] = useState({
    name: "",
    // tslint:disable-next-line: object-literal-sort-keys
    lastname: "",
    state: "",
    city: "",
    phone: "",
    email: "",
    password: ""
  });
  const history = useHistory();
  // tslint:disable-next-line: no-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await callApi("POST", "users", register);
    if (data.res.status === 200) {
      localStorage.setItem("token", data.text.token);
      history.push("/");
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" onChange={(e: any) => setRegister({...register, name: e.target.value})} />
        <input type="text" name="lastname" placeholder="Sobrenome" onChange={(e: any) => setRegister({...register, lastname: e.target.value})} />
        <input type="text" name="state" placeholder="Estado"  onChange={(e: any) => setRegister({...register, state: e.target.value})} />
        <input type="text" name="city" placeholder="Cidade" onChange={(e: any) => setRegister({...register, city: e.target.value})} />
        <input type="telefone" name="phone" placeholder="Telefone" onChange={(e: any) => setRegister({...register, phone: e.target.value})} />
        <input type="email" name="email" placeholder="E-mail" onChange={(e: any) => setRegister({...register, email: e.target.value})} />
        <input type="password" name="password" placeholder="Senha" onChange={(e: any) => setRegister({...register, password: e.target.value})} />
        <button>Cadastrar</button>
      </Form>
    </Container>
  );
};
