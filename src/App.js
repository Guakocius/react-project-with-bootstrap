import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import background from "./img/github.png"
import Navbar from "./Navbar";
import {Container} from "react-bootstrap";


function App() {


    function openGitHub() {
        window.open("https://github.com/Guakocius")
    }
  return (
    <div className="App bg-dark text-light" style={{width: "100%", minHeight: "100vh"}}>
        <Container>
      <header className="App-header">
          <Navbar></Navbar>
          <h1 className= "mt-3 mb-4" style={{textDecoration: "underline"}}>
              Home
          </h1>
      </header>
        <p className="mb-4">
            Welcome to our shop! Here you can buy anything your heart desires! For more information
            regarding our services follow us on our social media:
        </p>
          <Button className="mt-4" onClick={openGitHub} style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", width: "100px", height: "80px", border: "none"}}></Button>
        </Container>
    </div>
  );
}

export default App;
