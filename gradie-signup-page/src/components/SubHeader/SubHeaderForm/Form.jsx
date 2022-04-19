import "./Form.css";

export const Form = (Label) => {
  return (
    <form action="true">
      <h3>Login</h3>
      <label htmlFor="Email">Email</label>
      <input type="email" placeholder="john@example.com"></input>
      <label htmlFor="Password">Password</label>
      <input type="password" placeholder="At least 8 character"></input>
      <input className="checkbox" type="checkbox"></input>
      <p className="form-title">
        By creating an account, you agree <br></br>
        <span>Terms &amp; Conditions</span>
      </p>
      <a href="www.facebook.com">Create an Account</a>
    </form>
  );
};
