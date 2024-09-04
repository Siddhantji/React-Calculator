import style from "./ButtonsContainer.module.css"
const ButtonsContainer = () => {
const buttonNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

  return (
    <div className={style.buttonsContainer}>
      {buttonNames.map(button =>(
              <button className={style.button}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
