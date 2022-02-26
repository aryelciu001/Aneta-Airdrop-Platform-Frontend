import { Select } from "@arco-design/web-react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { updateTokenCurrency } from "reducers/globalSlice";
import { Token } from "utils";
import "./index.scss";

const Option = Select.Option;

export default function TokenSelect() {
  const tokenArray = useSelector(
    (state: RootStateOrAny) => state.global.tokenArray
  );
  const dispatch = useDispatch();

  return (
    <Select
      placeholder="Select token"
      onChange={(value) => dispatch(updateTokenCurrency(value))}
      showSearch
      disabled={!tokenArray.length}
    >
      {tokenArray.map((token: Token, index: number) => (
        <Option key={index} value={token.name}>
          {token.name}
        </Option>
      ))}
    </Select>
  );
}
