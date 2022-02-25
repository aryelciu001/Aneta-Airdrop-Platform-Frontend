import { Button, InputNumber } from "@arco-design/web-react";
import { IconSend } from "@arco-design/web-react/icon";
import "./index.scss";

export default function TokenDetail() {
  const COMPONENT_CLASS = "token-detail";
  return (
    <div className={COMPONENT_CLASS}>
      <h2>Airdrop Parameters</h2>
      <div className={`${COMPONENT_CLASS}__row`}>
        <span>Tokens per wallet</span>
        <InputNumber min={0} defaultValue={0} step={1} precision={2} />
      </div>
      <div className={`${COMPONENT_CLASS}__row`}>
        <span>Total tokens to be airdropped</span>
        <span>10000 neta</span>
      </div>
      <div className={`${COMPONENT_CLASS}__row`}>
        <span>Fee</span>
        <span>0.3 ada</span>
      </div>
      <div className={`${COMPONENT_CLASS}__row`}>
        <Button>
          Airdrop
          <IconSend />
        </Button>
      </div>
    </div>
  );
}
