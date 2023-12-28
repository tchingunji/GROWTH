import React from 'react';
import './styles.css'
import Button from '@/shared/button';
import img1 from '../shared/assets/logo2.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="containerHeader">
      <Image src={img1} alt='Descrição da imagem' className='mt-4 icone' sizes='100vw'  style={{width:'10%',}}/>
      <div className='menu'>
        <Button title='ASSINE AGORA!' color='warn' size='small'/>
        <Button title='CHAMA NO ZAP!' color='success'size='small' />
      </div>
    </div>
    
  );
}

export default Header;
