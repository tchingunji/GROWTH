import React from 'react';
import './styles.css'
import Form from './Form';
import Button from '@/shared/button';
import Image from 'next/image';
import img1 from '../shared/assets/img1.png';
import img2 from '../shared/assets/img2.png';

const ContainerForm = () => {
  return (
    <div className="containerForm">
      <div className='centeredContent'></div>

      <div className='centeredContent' style={{padding:7}}>
        <p className='Info'>
          Procurando o <span>melhor plano de internet</span>, com maior velocidade e estabilidade
          na conexão? Com o nosso <span>COMBO</span> você vai ter acesso aos melhores filmes e séries
          utilizando a <span>melhor internet da região.</span>
        </p>

        <Image src={img1} alt='Descrição da imagem' className='mb-4' sizes='100vw'  style={{width:'100%', height:'100%',}}/>

        <Image src={img2} alt='Descrição da imagem' className='mb-4' sizes='100vw'  style={{width:'100%', height:'100%',}}/>

      </div>

      
      <div className='centeredContentForm'>
        <p className='formInfo'><span>Preencha  os seus dados ou </span>chama no zap!</p>
        <Form/>
        <Button title='CHAMA NO ZAP!' color='success'/>
      </div>

      <div className='centeredContent'></div>
    </div>
    
  );
}

export default ContainerForm;
