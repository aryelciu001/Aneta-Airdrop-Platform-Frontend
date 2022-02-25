import TokenSelect from "./TokenSelect";
import TokenDetail from "./TokenDetail";
import useDualThemeClass from "hooks/useDualThemeClass";
import { Button, Upload } from "@arco-design/web-react";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { UploadItem } from "@arco-design/web-react/es/Upload";

export default function AirdropTool() {
  const COMPONENT_CLASS = "airdrop-tool";

  const [fileList, setFileList] = useState<UploadItem[]>([])

  const [CLASS, CHILD_CLASS] = useDualThemeClass({
    main: COMPONENT_CLASS,
    el: "child",
  });

  useEffect(() => {
    // handle file upload
  }, [fileList])

  return (
    <div className={CLASS}>
      <div
        className={`${COMPONENT_CLASS}__token_input ${COMPONENT_CLASS}__row ${CHILD_CLASS}`}
      >
        <TokenSelect />
        <Upload showUploadList={false} className={`${COMPONENT_CLASS}__upload`} fileList={fileList} onChange={setFileList}>
          <Button>Add addresses</Button>  
        </Upload>
      </div>
      <div className={`${COMPONENT_CLASS}__row ${CHILD_CLASS}`}>
        
      </div>
      <div className={`${COMPONENT_CLASS}__row ${CHILD_CLASS}`}>
        <TokenDetail></TokenDetail>
      </div>
    </div>
  );
}
