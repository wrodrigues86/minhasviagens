import { useState } from "react";

export default function App() {

  const [local, setLocal] = useState([
    {
      Id: 1,
      Nome: "",
      Localizacao: "",
      cidade: "",
      bairro: "",
      cep: "",
      descricao: "",
      fotocapa: "",
      foto: "",
      preçodiario: 0,
      classificacao: 5,
      telefone: "",
      email: ""
    }
  ]);

  return (
    <div>Ola</div>
  );
};