import "./App.css";
import { Button } from "./components/Button";

const Header = () => {
  return (
    <header className="header ">
      <h1>My First React</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; my self : 2022</p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, excepturi.
        Blanditiis qui nihil voluptatum ut, quia architecto temporibus facere!
        Corrupti nemo reprehenderit tempore laborum! Tempore deserunt beatae at
        ratione quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nemo tempora, veniam quaerat accusamus aut non ipsam maxime officiis
        nesciunt consequatur aliquid sapiente unde odit. Modi, enim non.
        Quisquam, maiores quaerat.
      </p>
      <Button pName="This is a button" />
    </div>
  );
};

function App() {
  return (
    <div>
      <br />
      <br />
      <div className="card center container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
