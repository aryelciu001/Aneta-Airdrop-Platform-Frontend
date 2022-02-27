import "App.scss";
import useBackgroundImage from "hooks/useBackgroundImage";
import Navbar from "components/Navbar";
import AirdropTool from "components/AirdropTool";
import useDualThemeClass from "hooks/useDualThemeClass";
import { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { updateTokenArray } from "reducers/globalSlice";
import { setWalletAddress } from "reducers/blockchainSlice";
import { Address } from "@emurgo/cardano-serialization-lib-asmjs";
import { Buffer } from "buffer";

const tokenArray = [
  {
    name: "ADA",
  },
  {
    name: "NETA",
  },
];

function App() {
  const CONTAINER_CLASS = useDualThemeClass({ main: "container", el: "" })[0];
  const api = useSelector((state: RootStateOrAny) => state.blockchain.api);
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * this is where we need to retrieve token array
     */

    dispatch(updateTokenArray(tokenArray));
  }, [dispatch]);

  useEffect(() => {
    /**
     * check if wallet is connected
     * and api is working
     */
    (async function () {
      if (api == null) return
      let address = await api.getChangeAddress();
      try {
        address = Address.from_bytes(Buffer.from(address, "hex")).to_bech32();
        if (address) {
          dispatch(setWalletAddress(address))
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [api]);

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
