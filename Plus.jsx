import "./Plus.css";

function PlusButton({onClick}) {
  return (
    <div className="btnbox">
      <button className="btn" onClick={onClick}>+</button>
    </div>
  );
}

export default PlusButton;
