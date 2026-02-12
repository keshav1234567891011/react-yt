const Card = (props) => {
  console.log(props.user);
  return (
    <div className="card">
      <img src={props.img}></img>
      <h1>
        {props.user},{props.age}
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        adipisci?
      </p>
      <button className="button">view peofile</button>
    </div>
  );
};

export default Card;
