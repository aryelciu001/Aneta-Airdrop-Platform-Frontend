import { Button } from "@arco-design/web-react";
import ThemeSwitch from "components/Navbar/ThemeSwitch";
import useDualThemeClass from "hooks/useDualThemeClass";
import useWallet from "hooks/useWallet";
import "./index.scss";

export default function Navbar() {
  const [CLASS, EL_CLASS] = useDualThemeClass({ main: "navbar", el: "button" });
  const [enableWallet] = useWallet();

  const connectWallet = () => {
    enableWallet();
  };

  return (
    <div className={CLASS}>
      <ThemeSwitch></ThemeSwitch>
      <Button className={EL_CLASS} onClick={connectWallet}>
        Connect wallet
      </Button>
    </div>
  );
}
