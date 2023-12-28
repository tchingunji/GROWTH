import './styles.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title:string;
    onClick?:()=>void;
    size?: 'small' | 'default' | 'large';
    color: 'success' | 'warn';
    loading?: boolean;
}
const Button:  React.FC<Props>=({
    size='default',
    loading,
    form='form',
    onClick,
    color,
    ...props
})=>{


    const clickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick != undefined) {
          e.stopPropagation();
          onClick();
        }
      };

    return(
        <>
        <button 
            className='button' 
            /*style={ color==='success'?{backgroundColor:'#008000'}:{backgroundColor:'#FFA500'} } */
            style={{ backgroundColor:color==='success'?'#008000':'#FFA500', width: size==='large'?'70%':'70%'}}
            >
            {props.title}
            {loading &&(
                <div className='loader'>
                    <p>Carregando...</p>
                </div>
            )}
        </button>
        </>
    )
}

export default Button