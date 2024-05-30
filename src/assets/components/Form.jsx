import "./Form.css"

export function RegisterForm () {
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
export function LoginForm() {
  return (
    <>
      <div className="container">
        <img src="/Logo sin fondo.jpg" className="logo" />
        <form>
          <input
            className="client"
            placeholder="Username"
          ></input>
          <input placeholder="Password" name="password"></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}