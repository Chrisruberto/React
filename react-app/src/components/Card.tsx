import { ReactNode } from "react";

interface Props {
    children: ReactNode
}


function Card(props: Props) {
    const { children } = props;

    return (
      <div className="card" style={{width:"350px"}}>
        <div className="card-body">
        {children}
        </div>
      </div>
    );
  }
  
  interface CardbodyProps {
    title:string 
    text?: string
  }

  export function CardBoody(props: CardbodyProps){
    const { title, text } = props;
    return (
        <>
        <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
          </p>
        </>
    );
  }

  export default Card;
  