import "App.scss";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import useBackgroundImage from "hooks/useBackgroundImage";
import ThemeSwitch from "components/ThemeSwitch";

function App() {
  const darkTheme = useSelector((state: RootStateOrAny) => state.global.darkTheme);
  const bg = darkTheme ? 'dark-bg.jpg' : 'light-bg.jpg'

  return (
    <div
      className="App App-dark"
      style={useBackgroundImage(bg)}
    >
      <ThemeSwitch></ThemeSwitch>
    </div>
  );
}

export default App;
