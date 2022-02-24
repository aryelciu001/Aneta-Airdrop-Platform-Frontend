import TokenSelect from "./TokenSelect";
import useDualThemeClass from "hooks/useDualThemeClass";
import { Button } from "@arco-design/web-react";

export default function AirdropTool () {
  const COMPONENT_CLASS = "airdrop-tool"

  const [CLASS, SELECT_CLASS] = useDualThemeClass({
    main: COMPONENT_CLASS,
    el: "child",
  });

  const BUTTON_CLASS = useDualThemeClass({
    main: COMPONENT_CLASS,
    el: "child",
  })[1];

  return (
    <div className={CLASS}>
      <div className={`${COMPONENT_CLASS}__row`}>
        <TokenSelect className={SELECT_CLASS}/>
        <Button className={BUTTON_CLASS}>Add addresses</Button>
      </div>
    </div>
  )
}