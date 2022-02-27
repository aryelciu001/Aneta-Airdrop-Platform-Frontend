import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setApi } from "reducers/blockchainSlice";
import { WalletName, API } from "utils";

export default function useWallet() {
  const dispatch = useDispatch();

  const enableWallet = async (walletName: string) => {
    try {
      let API: API = undefined;
      switch (walletName) {
        case WalletName.NAMI:
          API = await (window as any).cardano.nami.enable();
          break;
        case WalletName.CCVAULT:
          API = await (window as any).cardano.ccvault.enable();
          break;
        default:
          throw new Error();
      }
      dispatch(setApi(API));
    } catch (err) {
      window.alert("Something is wrong");
      console.log(err);
    }
  };
  return [enableWallet];
}
