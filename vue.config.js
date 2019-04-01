const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  // 强制内联CSS
  css: { extract: false },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('variable', resolve('src/assets/js/variable'))
      .set('common', resolve('src/assets/js/common'))
      .set('src', resolve('src'))
      .set('const', resolve('src/assets/js/const'))
      .set('utils', '@souche-f2e/souche-util')
      .set('cup', '@souche-f2e/cup')
      .set('som-ui', '@souche-ui/som-ui')
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('env', resolve('src/assets/js/helper/env'));
  },
};
