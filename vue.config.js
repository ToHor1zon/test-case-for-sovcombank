module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/index.scss";`
      }
    }
  }
};
