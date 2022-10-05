import style from '../Styles/Card.module.css';

export default function Card(props) {
  const { image, card, name, nameContainer } = style;
  const { reArrange, handleClickExternal } = props;

  const handleClick = () => {
    handleClickExternal(!reArrange, props.name);
  };

  return (
    <div onClick={handleClick} className={card}>
      <img className={image} alt={props.name} src={props.image}></img>
      <div className={nameContainer}>
        <p className={name}>{props.name}</p>
      </div>
    </div>
  );
}
