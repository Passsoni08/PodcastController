import * as http from "http";
import { app } from "./app";

//Criando servidor utilizando conteudo do app
const server = http.createServer(app);

//Configuração da porta
const port = process.env.PORT;

//Ouvindo a porta criada
server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
});