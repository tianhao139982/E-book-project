module.exports = {
    devServer: {
        // 跨域代理
        proxy: {
            '/api': {
                //target: 'http://47.100.236.223:1211/',
                target: 'http://127.0.0.1:1211/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    // 基本路径
    publicPath: './',
}
