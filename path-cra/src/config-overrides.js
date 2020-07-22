// arquivo para ajudar no encaminhamento dos arquivos esse projeto, substitui algumas cnfigurações do babel
// PS: codigo em node, nao em react
// para poder utilizar esse arquivo fizemos npm install do: react-app-rewired e do babel-plugin-root-import


const { injectBabelPlugin } = requiore('react-app-rewired');

const rootImport = [
    "root-import" ,
    {
        rootPathPrefix: "~", // string para caminho absoluto da aplicação
        rootPathSuffix: "src" // pasta que queremos que seja a pasta raíz
    }
];

module.exports = config => injectBabelPlugin(rootImport, config);

