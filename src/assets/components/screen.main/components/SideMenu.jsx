import "./SideMenu.css";

export function SideMenu(){
    return (
      <div className="sideMenu">
        <div className="menu">
          <div className="item flex">
            <span className="material-symbols-outlined icon">space_dashboard</span>{" "}
            <div>Tablero</div>
          </div>
          <div className="item flex">
            <span className="material-symbols-outlined icon">storefront</span>{" "}
            <div>Tienda</div>
          </div>
          <div className="item flex">
            <i className="bi bi-box-fill icon"></i>
            <div>Pedidos</div>
          </div>
          <div className="item flex">
            <i className="bi bi-people-fill icon"></i>
            <div>Clientes</div>
          </div>
          <hr></hr>
          <div className="item flex disabled">
            <span className="material-symbols-outlined icon">add_comment</span>{" "}
            <div>Feedback</div>
          </div>
        </div>
      </div>
    );
}

