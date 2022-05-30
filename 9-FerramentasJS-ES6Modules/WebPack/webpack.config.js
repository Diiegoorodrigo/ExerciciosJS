const path = require('path') // configuração do webpack para que ele possa ser exportado p

module.exports = {
    mode:'development', // há dois modos de uso do mode no development ele traz as linhas de código semelhantes ao modo que o código é digitado já no outro mode ele traz toda a linha de código digitada em apenas uma linha
    entry:'./src/index.js',

    output: {

        path: path.resolve(__dirname, 'public','assets','js'), // aqui é a saida do arquivo nesse caso usando o dirname para que o próprio modulo trace o caminho agindo de forma diferente em sistemas diferentes, nesse caso dando o nomoe das três pastas e o nome do arquivo que vai ser criado no caso o bundle.js
        filename: 'bundle.js'

    },

    module: {

        // rules são as regras do modulo, no caso abaixo exclude vai excluir a leitura da pasta node modules, loader vai rodar o babel-loader e options vai definir as opções de uso no caso inserindo o preset do babel/env
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader:'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },{
            test: /\.css$/,
            use: ["sytle-loader", "css-loader"]
        }]

    },

    devtool: 'source-map' // é o que vai mapear o arquivo index.js e ver onde há erros, ou mostrando a linha do código que está sendo executada ex: se um console.log foi executado na linha 4 vai mostrar que foi executado na linha 4 

    }

    // configuração do webpack