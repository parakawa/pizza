// const config = require('config')
// const clone = require('clone') 
// const { join } = require('path')
const srcDir = 'src'
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    dev: isDev,
    srcDir: 'src',
    server: {},
    build: {
        parallel: true,
        extend(config) {
            const extensions = [ 
                '.vue', 
                '.yml', 
                '.yaml',
                '.json'
            ]

            extensions.forEach(ext => config.resolve.extensions.push(ext))

            config.module.rules.push({
                test: /\.(yml|yaml)$/,
                use: ['json-loader', 'yaml-loader']
            })

            config.module.rules.push({
                test: /\.sass$/,
                use: [
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                `./src/assets/sass/_variables.sass`,
                                `./src/assets/sass/_mixins.sass`,
                                `./src/assets/sass/fonts.sass`,
                                `./src/assets/sass/main.sass`,
                            ]
                        }
                    }
                ]
            })

            config.module.rules.forEach( ({ loader, options }) => {
                if (loader === 'vue-loader') {
                    options.preLoaders = {
                        i18n: 'yaml-loader'
                    }
                    options.loaders = {
                        i18n: '@kazupon/vue-i18n-loader' 
                    }
                }
            })
        }
    },
    head: {
        titleTemplate: 'Nuxt - %s',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: "favicon.ico" },
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'}
          
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description',  name: 'description', content: 'description'}
        ],
    },
    css: [ `~/assets/sass/main.sass`,
    ],
    serverMiddleware: [
    ],
    plugins: ['~/plugins/vuetify'],
    modules: [
    ]
}