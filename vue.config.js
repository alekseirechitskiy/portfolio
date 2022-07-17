// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     publicPath: './',
//     transpileDependencies: true
// })
module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    }
}