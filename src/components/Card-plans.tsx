import React from 'react';
import './styles.css'
import img1 from '../shared/assets/plano.png';
import img2 from '../shared/assets/inscrito1.png';
import img3 from '../shared/assets/inscrito2.png';
import img4 from '../shared/assets/inscrito3.png';
import Image from 'next/image';
import Button from '@/shared/button';

const CardPlans = () => {
  return (
    <div>
        <div className="containerHeader">
            <Image src={img1} alt='Descrição da imagem' className='mb-4' sizes='100vw'  style={{width:'50%', height:'43%'}}/>
        </div>

        <div className="containerHeader"> 
            <Button title='CHAMA NO ZAP!' color='success' size='large'/>
        </div>

        <div className="containerSubscrever"> 
            <Image src={img2} alt='Descrição da imagem' className='mb-4' sizes='60vw'  style={{width:'20%'}}/>
            <Image src={img3} alt='Descrição da imagem' className='mb-4' sizes='60vw'  style={{width:'20%', marginLeft:25, marginRight:25 }}/>
            <Image src={img4} alt='Descrição da imagem' className='mb-4' sizes='60vw'  style={{width:'20%'}}/>
        </div>

    </div>
  );
}

export default CardPlans;
