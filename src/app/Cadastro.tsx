'use client';

import { useState } from 'react';
import {
  Container,
  TituloPrincipal,
  Form,
  Secao,
  TituloSecao,
  Label,
  Input,
  Botao
} from './Cadastro.styles'; // Importe os componentes estilizados

const Cadastro = () => {
  const [tutor, setTutor] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const [pet, setPet] = useState({
    nome: '',
    raca: '',
    porte: '',
    observacao: '',
  });

  const mudarDadosTutor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTutor({ ...tutor, [name]: value });
  };

  const mudarDadosPet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tutor:', tutor);
    console.log('Pet:', pet);
    // envio
  };

  return (
    <Container>
      <TituloPrincipal>Cadastre-se</TituloPrincipal>
      <Form onSubmit={enviarFormulario}>
        <Secao>
          <TituloSecao>Dados do Tutor</TituloSecao>
          <Label>
            Nome:
            <Input type="text" name="nome" value={tutor.nome} onChange={mudarDadosTutor} required />
          </Label>
          <Label>
            Endereço:
            <Input type="text" name="endereco" value={tutor.endereco} onChange={mudarDadosTutor} required />
          </Label>
          <Label>
            Telefone:
            <Input type="tel" name="telefone" value={tutor.telefone} onChange={mudarDadosTutor} required />
          </Label>
          <Label>
            Email:
            <Input type="email" name="email" value={tutor.email} onChange={mudarDadosTutor} required />
          </Label>
          <Label>
            Senha:
            <Input type="password" name="senha" value={tutor.senha} onChange={mudarDadosTutor} required />
          </Label>
        </Secao>

        <Secao>
          <TituloSecao>Dados do Pet</TituloSecao>
          <Label>
            Nome do Pet:
            <Input type="text" name="nome" value={pet.nome} onChange={mudarDadosPet} required />
          </Label>
          <Label>
            Raça:
            <Input type="text" name="raca" value={pet.raca} onChange={mudarDadosPet} required />
          </Label>
          <Label>
            Porte:
            <Input type="text" name="porte" value={pet.porte} onChange={mudarDadosPet} required />
          </Label>
          <Label>
            Observação:
            <Input type="text" name="observacao" value={pet.observacao} onChange={mudarDadosPet} />
          </Label>
        </Secao>

        <Botao type="submit">Cadastrar</Botao>
      </Form>
    </Container>
  );
};

export default Cadastro;
