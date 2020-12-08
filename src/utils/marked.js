import React from "react";
import { Anchor, notification } from "antd";
const { Link } = Anchor;
class MarkedDirectory {
  constructor() {
    this.toc = [];
  }

  add(text, level) {
    const index = this.toc.findIndex((item) => item.text === text);
    console.log(index);
    if (index !== -1) {
      notification.warning({ message: `${level}级标题已经存在` });
      return;
    }
    this.toc.push({
      level,
      text,
    });
  }

  clear() {
    this.toc = [];
  }

  render(isLink) {
    return (
      <ul>
        {this.toc.map(({ level, text }) => (
          <li key={level + text} className={`md-level-${level}`}>
            {isLink ? <a href={`#${text}`}> {text}</a> : text}
          </li>
        ))}
      </ul>
    );
  }
}

export default MarkedDirectory;
