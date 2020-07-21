// 批量导出svg
const context = require.context(".", true, /\.svg$/);

const icon = {};
context.keys().forEach((i) => {
  const name = i.slice(2).slice(0, -4);
  icon[name] = context(i).default;
});

export default icon;
