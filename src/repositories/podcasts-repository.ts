//Fornecer os dados para quem estiver "chamando de fora"


//File System - read and write system's files
import fs from "fs";
//Path - read specific directories
import path from "path";
//Importar interface
import { PodcastModel } from "../models/podcast-model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {

    const language = "utf-8";
    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );
    }

    return jsonFile;
};