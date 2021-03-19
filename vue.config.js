const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const mockServerPort = 8080
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/styles/variables.scss'),
                path.resolve(__dirname, 'src/styles/mixins.scss')
            ]
        }
    },
    devServer: {
        port: mockServerPort,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        }
        // proxy: {
        //     [process.env.VUE_APP_BASE_API]: {
        //         target: `http://localhost:${mockServerPort}`,
        //         changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //         // ws: true,// proxy websockets
        //         pathRewrite: { // pathRewrite方法重写url
        //             ['^' + process.env.VUE_APP_BASE_API]: ''
        //         }
        //     }
        // }
    },
    lintOnSave: false,
    productionSourceMap: process.env.NODE_ENV === 'development' ? true : false,
    
    chainWebpack(config) {

        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test

        config.optimization.minimize(true);

        // css img按需加載
        if (process.env.NODE_ENV !== 'development') {
            config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
            .use('url-loader')
            .loader('file-loader')
            .options({
                name: 'css/[name].[hash:8].[ext]'
            }).end()
            config.module.rule('svg')
            .test(/\.(svg)(\?.*)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'css/[name].[hash:8].[ext]'
            })

            config
            .plugin('uglifyjs-plugin')
            .use('uglifyjs-webpack-plugin', [{
            uglifyOptions: {
                warnings: false,
                compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log']
                }
            }
            }])
            .end()

            
            config.optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                    libs: {
                        name: 'chunk-libs',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: 'initial' // only package third parties that are initially dependent
                    },
                    elementUI: {
                        name: 'chunk-elementUI', // split elementUI into a single package
                        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                        test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                    },
                    commons: {
                        name: 'chunk-commons',
                        test: path.resolve(__dirname, 'src/components'),
                        minChunks: 3, //  minimum common number
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
                
            })

            config.optimization.runtimeChunk('single')
            config.plugin('CompressionWebpackPlugin').use(CompressionWebpackPlugin) 
        }

        

        config.resolve.alias
            .set('@', path.resolve('src'))
            .set('@assets', path.resolve('src/assets'))
    
    }
}

