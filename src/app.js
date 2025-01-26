import { envs } from './config/env.js';
import { startServer } from './server/server.js';


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



