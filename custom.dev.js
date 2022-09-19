const path = require('path')
module.exports = {
    mode : "development",
    entry : path.resolve(__dirname , 'src/App.js'),
    //loader
    module:{
        rules:[
            {
                test : /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //loader
    devServer : {
        static :{
            directory : path.resolve(__dirname , "dist"),
        },
        compress : true,
        port : 4500,
        open : true,
    }
}