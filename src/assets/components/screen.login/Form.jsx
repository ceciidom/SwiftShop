import "./Form.css";
import logo from "/logo.png"


export function RegisterForm () {
    return (
      <>
        <div className="container">
          <img src={logo} className="logo"/>
          <form>
            <input className="client" placeholder="cliente152165@swiftshop.com" disabled></input>
            <input placeholder="Create password" name="password" type="password"></input>
            <input placeholder="Confirm password" name="confirmPassword" type="password"></input>
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
        <img src={logo} className="logo" />
        <form>
          <input
            className="client"
            placeholder="Username"
            type="text"
          ></input>
          <input placeholder="Password" name="password" type="password"></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}