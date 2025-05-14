import * as http from "http";
import { getListEpisodes } from './controllers/podcasts-controller';
import { getFilterEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


export const app = async (
    request: http.IncomingMessage,
    response: http.ServerResponse
) => {

    //queryString
    const baseUrl = request.url?.split("?")[0];

    //listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    //Filtrar
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}