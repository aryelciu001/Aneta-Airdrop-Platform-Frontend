import { Button, InputNumber } from "@arco-design/web-react";
import { IconSend } from "@arco-design/web-react/icon";
import { useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./index.scss";

export default function TokenDetail() {
  const COMPONENT_CLASS = "token-detail";
  const currency = useSelector((state: RootStateOrAny) => state.global.tokenCurrency)
  const addressArray = useSelector((state: RootStateOrAny) => state.global.addressArray)
  const addressArrayLength = addressArray.length
  const totalTokenToBeAirdropped = addressArray * addressArrayLength

  const [tokenPerWallet, setTokenPerWallet] = useState(0)

  const sendToken = () => {
    console.log(`Sending ${totalTokenToBeAirdropped} ${currency}...`)
  }

  return (
    <div className={COMPONENT_CLASS}>
      <h2>Airdrop Parameters</h2>
      <div className={`${COMPONENT_CLASS}__row`}>
        <span>Tokens per wallet</span>
        <InputNumber min={0} defaultValue={tokenPerWallet} step={1} precision={2} onChange={setTokenPerWallet}/>
      </div>
      <div className={`${COMPONENT_CLASS}__row`}>
        <span>Total tokens to be airdropped</span>
        <span>{totalTokenToBeAirdropped} {currency}</span>
      </div>
      <div className={`${COMPONENT_CLASS}__row`}>
        <span>Fee</span>
        <span>0.3 ADA</span>
      </div>
      <div className={`${COMPONENT_CLASS}__row`}>
        <Button onClick={sendToken} disabled={tokenPerWallet === 0 || currency == ''}>
          Airdrop
          <IconSend />
        </Button>
      </div>
    </div>
  );
}
