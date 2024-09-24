import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TituloPrincipal = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
`;

export const Secao = styled.div`
  margin-bottom: 20px;
`;

export const TituloSecao = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

export const Botao = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;