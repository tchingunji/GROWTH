import React from 'react';
import './styles.css'
import Image from 'next/image';
import img1 from '../shared/assets/logo2.png';
import imgSocial3 from '../shared/assets/linkedln.png';
import imgSocial2 from '../shared/assets/instagram.png';
import imgSocial1 from '../shared/assets/facebook.png';

const Footer = () => {
  return (
    <div className='footer'>
        <Image src={img1} alt='Descrição da imagem' className='mt-4' sizes='100vw'  style={{width:'3%', height:'3%',}}/>
        <p>© 2023 Opyt LTDA. Todos os direitos reservados</p>
        <div className='containerSocial'>
            <Image src={imgSocial1} alt='Descrição da imagem' className='mr-1' width={20}/>
            <Image src={imgSocial2} alt='Descrição da imagem' className='mr-1' width={20}/>
            <Image src={imgSocial3} alt='Descrição da imagem' className='mr-1' width={20}/>
        </div>
    </div>
    
  );
}

export default Footer;
