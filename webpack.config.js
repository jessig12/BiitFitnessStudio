const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'public/home.js'),
        servicios: path.resolve(__dirname, 'public/servicios.js'),
        quejas: path.resolve(__dirname, 'public/quejas.js'),
        contacto: path.resolve(__dirname, 'public/contacto.js'),
        conocenos: path.resolve(__dirname, 'public/conocenos.js'),
        galeria: path.resolve(__dirname, 'public/galeria.js'),
        productos: path.resolve(__dirname, 'public/productos.js'),
        login: path.resolve(__dirname, 'public/login.js'),
        /*
        registros: path.resolve(__dirname, 'src/pages/registros/registros.js'),
        promociones: path.resolve(__dirname, 'src/pages/promociones/promociones.js'),
        home: path.resolve(__dirname, 'src/pages/home/home.js'),
        bundle: path.resolve(__dirname, 'src/index.js'),
        */
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name]-[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home/index.html',
            template: 'views/home.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'servicios/index.html',
            template: 'views/servicios.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'quejas/index.html',
            template: 'views/quejas.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'registro/index.html',
            template: 'views/registro.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'productos/index.html',
            template: 'views/productos.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'login/index.html',
            template: 'views/login.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'galeria/index.html',
            template: 'views/galeria.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto/index.html',
            template: 'views/contacto.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'conocenos/index.html',
            template: 'views/conocenos.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'biitfam/index.html',
            template: 'views/biitfam.ejs'
        }),
        /*
        new HtmlWebpackPlugin({
            filename: 'login/index.html',
            template: 'src/pages/login/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'registros/index.html',
            template: 'src/pages/registros/registros.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'promociones/index.html',
            template: 'src/pages/promociones/promociones.html'
        })
        */
    ],
}