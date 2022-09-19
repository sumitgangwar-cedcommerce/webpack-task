const path = require('path')
module.exports = {
    mode : "production",
    entry : path.resolve(__dirname , 'src/App.js'),
    output : {
        path : path.resolve(__dirname , "dist"),
        filename : 'production.js'
    },
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
}