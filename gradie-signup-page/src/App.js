import "./App.css";
import { HeaderText } from "./components/header-title/header-text";
import { HeaderImg } from "./components/header-img/header-img";
import { Form } from "./components/SubHeader/SubHeaderForm/Form";

function App() {
  return (
    <header>
      <div className="login-form-container">
        <div className="header-title">
          <HeaderText />
          <HeaderImg />
        </div>
        <div className="sub-header-title">
          <Form />
        </div>
      </div>
    </header>
  );
}

export default App;
