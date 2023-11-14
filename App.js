import "./App.css"
import Navbar from "./components/NavBar";
import Textform from "./components/Textform";
 function App(){
  return(
    <>
    <Navbar title="TextUtile"/>
    <div className="container">
      <Textform Heading="write something here"/>
    </div>
    
    </>
  );
 }
 export default App;