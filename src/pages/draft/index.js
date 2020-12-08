import React, { useState, useCallback } from "react";
import marked from "marked";
import { connect } from "react-redux";
import { actionBlogSave } from "@models/blog";
import { Input, Modal, notification, Tag } from "antd";
import { Button } from "@material-ui/core";
import MarkedDirectory from "@utils/marked";

// react-md-editor-lite
const directory = new MarkedDirectory();

const renderer = {
  heading(text, level) {
    console.log(text, level);
    directory.add(text, level);
    return false;
  },
};
marked.use({ renderer });

import styles from "./index.less";

const Draft = (props) => {
  const {
    content,
    isPreview,
    isPublish,
    firstType,
    secondType,
    actionBlogSave,
  } = props;

  const handleInputChange = (e) => {
    actionBlogSave({
      content: e.target.value,
    });
  };

  const handleTypeChange = (type, value) => {
    actionBlogSave({
      [type]: value,
    });
  };

  // 预览
  const togglePreview = () => {
    directory.clear();
    if (!isPreview && !content) {
      notification.warning({ message: "请输入内容" });
      return;
    }
    actionBlogSave({
      isPreview: !isPreview,
    });
  };

  // 发布
  const togglePublish = () => {
    if (!isPublish && !content) {
      notification.warning({ message: "请输入内容" });
      return;
    }
    actionBlogSave({
      isPublish: !isPublish,
    });
  };

  const onFinish = () => {
    if (!firstType) {
      return notification.warning({ message: "请选择一级分类" });
    }
    if (!secondType) {
      return notification.warning({ message: "请选择二级分类" });
    }
    console.log(content);
  };

  const renderPreview = useCallback(
    (content) => {
      console.log(content);
      return marked(content);
    },
    [content]
  );

  return (
    <div className={styles.draft}>
      <div className={styles.previewBtn}>
        <Button onClick={togglePreview}>{isPreview ? "编辑" : "预览"}</Button>
        <Button onClick={togglePublish}>发布</Button>
      </div>
      {isPreview ? (
        <div
          className={styles.preview}
          dangerouslySetInnerHTML={{
            __html: isPreview && renderPreview(content),
          }}
        />
      ) : (
        <Input.TextArea
          autoFocus
          className={styles.textArea}
          value={content}
          onChange={handleInputChange}
        />
      )}
      {/* </div> */}
      <Modal
        title="发布文章"
        visible={isPublish}
        onCancel={togglePublish}
        onOk={onFinish}
        getContainer={false}
      >
        <p>分类</p>
        {[
          {
            name: "前端",
            key: "fe",
            color: "magenta",
          },
          {
            name: "后端",
            key: "be",
            color: "red",
          },
          {
            name: "开发工具",
            key: "code",
            color: "volcano",
          },
          {
            name: "其他",
            key: "other",
            color: "orange",
          },
        ].map((item) => (
          <Tag
            key={item.key}
            color={item.color}
            onClick={() => handleTypeChange("firstType", item)}
          >
            {item.name}
          </Tag>
        ))}
        <p>标签</p>
        {[
          {
            name: "React",
            key: "react",
            color: "magenta",
          },
          {
            name: "Vue",
            key: "vue",
            color: "red",
          },
          {
            name: "node",
            key: "node",
            color: "volcano",
          },
        ].map((item) => (
          <Tag
            key={item.key}
            color={item.color}
            onClick={() => handleTypeChange("secondType", item)}
          >
            {item.name}
          </Tag>
        ))}
        <p>已选分类</p>
        <Tag color={firstType.color}>{firstType.name}</Tag>
        <Tag color={secondType.color}>{secondType.name}</Tag>
      </Modal>
    </div>
  );
};

export default connect(
  ({ blog }) => ({
    isPreview: blog.isPreview,
    isPublish: blog.isPublish,
    content: blog.content,
    firstType: blog.firstType,
    secondType: blog.secondType,
  }),
  {
    actionBlogSave,
  }
)(Draft);
