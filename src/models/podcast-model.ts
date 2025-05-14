//Criar uma interface - contrato que todos os dados devem respeitar 
export interface PodcastModel {
    podcastName: string;
    episode: string;
    videoId: string;
    categories: string[];
}