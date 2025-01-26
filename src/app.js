const {envs} = require('./config/env.js');
const { startServer } = require('./server/server.js');


//Funcion anonima autoconvocada
//IIFE

const main = () => {
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH

    })
}

(async () =>{
    main()
})();



