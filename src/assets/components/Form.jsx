import "./Form.css"

export function Form () {
    return (
      <>
        <div className="container">
          <img src="/Logo sin fondo.jpg" className="logo"/>
          <form>
            <input className="client" placeholder="cliente152165@swiftshop.com" disabled></input>
            <input placeholder="Create password" name="password"></input>
            <input placeholder="Confirm password" name="confirmPassword"></input>
            <button>Register</button>
          </form>
        </div>
      </>
    );
}