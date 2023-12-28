import React from 'react';
import './styles.css'
import Button from '@/shared/button';
import Image from 'next/image';
import img1 from '../shared/assets/trofeu.png';
import img2 from '../shared/assets/estrela.png';
import img3 from '../shared/assets/casa.png';

const CardInformation = () => {
  return (
    <div className='containerCard'>
        <div>
            <p className='Info'>A Opyt não para  de crescer e já somos mais de:</p>
            <div className='CardTrophy'>
                <div className='Trophys'>
                    <Image src={img1} alt='Descrição da imagem' className='mb-4' sizes='100vw'  style={{width:'50%', height:'43%',}}/>
                    <p>18.000 MIL</p>
                    <p>CLIENTES ATIVOS</p>
                </div>
                <div className='Trophys'>
                    <Image src={img2} alt='Descrição da imagem' className='mb-4' sizes='100vw'  style={{width:'60%', height:'43%',}}/>
                    <p>4.000 KM DE</p>
                    <p>FIBRA</p>
                </div>
                <div className='Trophys'>
                    <Image src={img3} alt='Descrição da imagem' className='mb-4' sizes='100vw'  style={{width:'90%', height:'43%',}}/>
                    <p>7 CIDADES</p>
                    <p>ATENDIDAS</p>
                </div>
            </div>
            <div className="mb-4 flex justify-center">
                <Button title='CHAMA NO ZAP!' color='success'/>
            </div>
        </div>
    </div>
  );
}

export default CardInformation;
