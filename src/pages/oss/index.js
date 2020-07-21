import React, { useState, useCallback } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import FileUploadItem from "./file";

const { Dragger } = Upload;

const Oss = () => {
  const [list, setList] = useState([]);
  const props = {
    fileList: [],
    multiple: true,
    beforeUpload: (_, files) => {
      console.log(_, files);
      setList([...list, ...files]);
      return false;
    },
  };

  const onRemove = useCallback((file) => {
    setList((value) => value.filter((item) => item !== file));
  }, []);
  return (
    <div style={{ height: 300 }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">拖拽或点击上传文件</p>
        {/* <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p> */}
      </Dragger>
      {list.map((file) => (
        <FileUploadItem key={file.uid} file={file} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Oss;
