import { useState, useEffect } from 'react'
import TokenSelect from "./TokenSelect";
import TokenDetail from "./TokenDetail";
import useDualThemeClass from "hooks/useDualThemeClass";
import { Button } from "@arco-design/web-react";
import "./index.scss";

export default function AirdropTool() {
  const COMPONENT_CLASS = "airdrop-tool";

  const [CLASS, CHILD_CLASS] = useDualThemeClass({
    main: COMPONENT_CLASS,
    el: "child",
  });

  return (
    <div className={CLASS}>
      <div
        className={`${COMPONENT_CLASS}__token_input ${COMPONENT_CLASS}__row ${CHILD_CLASS}`}
      >
        <TokenSelect />
        <Button>Add addresses</Button>
      </div>
      <div className={`${COMPONENT_CLASS}__row ${CHILD_CLASS}`}>
        <TokenDetail></TokenDetail>
      </div>
    </div>
  );
}
