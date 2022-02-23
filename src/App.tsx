import "App.scss";
import useBackgroundImage from "hooks/useBackgroundImage";
import Navbar from "components/Navbar";

function App() {
  return (
    <div className="App" style={useBackgroundImage()}>
      <div className="container">
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default App;
