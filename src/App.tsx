import "App.scss";
import useBackgroundImage from "hooks/useBackgroundImage";
import Navbar from "components/Navbar";
import AirdropTool from "components/AirdropTool";
import useDualThemeClass from "hooks/useDualThemeClass";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTokenArray } from 'reducers/globalSlice'

function App() {
  const CONTAINER_CLASS = useDualThemeClass({ main: "container", el: "" })[0];

  const dispatch = useDispatch()

  useEffect(() => {
    // retrieve token array
    const tokenArray = [
      {
        name: 'ADA'
      },
      {
        name: 'NETA'
      }
    ]
    dispatch(updateTokenArray(tokenArray))
  }, [])

  return (
    <div className="App" style={useBackgroundImage()}>
      <div className={CONTAINER_CLASS}>
        <Navbar></Navbar>
        <AirdropTool></AirdropTool>
      </div>
    </div>
  );
}

export default App;
