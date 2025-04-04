interface Props {
    body: string
}


function Card(props: Props) {
    const { body } = props;

    return (
      <div className="card" style={{width:"350px"}}>
        <div className="card-body">
        {body}
        </div>
      </div>
    );
  }
  
  function CardBoody(){
    return (
        <>
        <h5 className="card-title">Card title</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </>
    );
  }

  export default Card;
  