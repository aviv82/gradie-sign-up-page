import "./App.css";
import { HeaderText } from "./components/header-title/header-text";
import { HeaderImg } from "./components/header-img/header-img";
import { SubHeaderHeader } from "./components/SubHeader/SubHeaderHeader/SubHeaderHeader";

function App() {
  return (
    <div className="App">
      <header>
        <div className="login-form-container">
          <div className="header-title">
            <HeaderText />
            <HeaderImg />
          </div>
          <div className="sub-header-title">
            <form action="true">
              <SubHeaderHeader />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
