module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/styles/element-variables.scss";`,
            },
        },
    },
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true
            },
        },
    },
};