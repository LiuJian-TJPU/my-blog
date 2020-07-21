import React, { memo, useEffect, useState, useMemo } from "react";

import { Progress } from "antd";
import {
  PaperClipOutlined,
  LoadingOutlined,
  ExclamationCircleOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";
import uploadOss from "@utils/uploadOss";

import styles from "./index.less";

const FileItem = memo((props) => {
  const { file, onRemove } = props;
  const [status, setStatus] = useState("active"); // ["active", "exception", "success"]
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    uploadOss(file, onProgress)
      .then((res) => {
        console.log(res);
        setStatus("success");
      })
      .catch(() => {
        setStatus("exception");
      });
  }, []);

  const onProgress = (p) => {
    setPercent(p);
  };

  const statusIcon = useMemo(() => {
    switch (status) {
      case "exception":
        return <ExclamationCircleOutlined />;
      case "success":
        return <PaperClipOutlined />;

      default:
        return <LoadingOutlined />;
    }
  }, [status]);

  return (
    <div className={styles.uploadItem}>
      {statusIcon}
      <div className={styles.progress}>
        <div style={{ flex: 1 }}>
          <div>{file.name}</div>
          <Progress
            strokeWidth={2}
            showInfo={false}
            percent={Math.floor(percent * 100)}
          />
        </div>
        {status !== "active" && (
          <CloseCircleFilled
            className={styles.closeIcon}
            onClick={() => {
              onRemove(file);
            }}
          />
        )}
      </div>
    </div>
  );
});

export default FileItem;
