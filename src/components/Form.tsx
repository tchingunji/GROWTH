'use client'
import Button from "@/shared/button";
import { ChangeEvent, FormEvent, useState,useEffect } from "react";

const inputClass = 'w-fulf py-2 px-20 border border-gray-300 rounded-md focus:outline-none focus: ring focus:border-blue-300'; 

interface Props{
  nome:string;
  email:string;
  telefone:string;
  cidade:string;
  resposta:number;
}

const Form = () => {

  const initialFormData = {
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    resposta: 0,
  };
  const [formData, setFormData] = useState<Props>({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    resposta:0,
  })

  const [loadind, setLoading] = useState(false);
  const [randomNumber1, setRandomNumber1] = useState<number>(0);
  const [randomNumber2, setRandomNumber2] = useState<number>(0);
  
  useEffect(() => {
    setRandomNumber1(Math.floor(Math.random() * 11));
    setRandomNumber2(Math.floor(Math.random() * 11));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const correctAnswer = randomNumber1 + randomNumber2;
    if((formData.resposta!=correctAnswer)){
      return alert('Verifique a resposta da operação matemática ');
    }
    try {
      const response = await fetch("http://localhost:3000/api/inscrito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          cidade: formData.cidade,
          email: formData.email,
          telefone: formData.telefone,
        }),
      });

      if (response.ok) {
        alert('Cadastrado com sucesso');
      } else {
        throw new Error(`Erro ao cadastrar: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert('Erro ao cadastrar');
    } finally {
      setLoading(false);
      setFormData(initialFormData);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    return (
        <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div className="mb-0">
            <label htmlFor="nome" className="block text-gray-600">Nome*</label>
            <input type="text" id="nome" name="nome" className={inputClass} value={formData.nome}onChange={handleChange}/>
          </div>
          <div className="mb-0">
            <label htmlFor="email" className="block text-gray-600">Email*</label>
            <input type="email" id="email" name="email" className={inputClass} value={formData.email}onChange={handleChange} />
          </div>
  
          <div className="mb-0">
            <label htmlFor="telefone" className="block text-gray-600">Telefone Whatsapp(DDD + Número)*</label>
            <input type="tel" id="telefone" name="telefone" className={inputClass} value={formData.telefone}onChange={handleChange}/>
          </div>
  
          <div className="mb-0">
            <label htmlFor="cidade" className="block text-gray-600">Qual a sua cidade?*</label>
            <input type="text" id="cidade" name="cidade" className={inputClass} value={formData.cidade}onChange={handleChange} />
          </div>
  
          <div className="mb-0">
            <label htmlFor="resposta" className="block text-gray-600"> {String(randomNumber1)} + {String(randomNumber2)} = ?</label>
            <input type="number" id="resposta" name="resposta" className={inputClass} value={formData.resposta}onChange={handleChange}/>
          </div>

          <div className="mb-4 flex justify-center"> 
            <Button title='ME CADASTRAR' color='warn' loading={loadind}/>
          </div>
      </form>
   );
}

export default Form