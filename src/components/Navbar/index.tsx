import { Button } from "@arco-design/web-react";
import ThemeSwitch from "components/ThemeSwitch";
import useDualThemeClass from "hooks/useDualThemeClass";
import "./index.scss";

export default function Navbar() {
  const [CLASS, EL_CLASS] = useDualThemeClass({ main: "navbar", el: "button" });

  return (
    <div className={CLASS}>
      <ThemeSwitch></ThemeSwitch>
      <Button className={EL_CLASS}>Connect wallet</Button>
    </div>
  );
}
