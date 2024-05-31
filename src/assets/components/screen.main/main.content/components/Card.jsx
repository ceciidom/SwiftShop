import "./Card.css"

export function Card(props) {
    return (
      <div className="containerBoard flex">
        <h3 className="flex">
          {props.cardName} <span className="material-symbols-outlined plusIcon">add</span>
        </h3>
        <div className="board flex"></div>
      </div>
    );
}