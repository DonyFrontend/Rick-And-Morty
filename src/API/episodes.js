import { instance } from "./instance";

export const episodesAPI = {
    getAllEpisodes(params) {
       return instance.get('episode', {params})
    }
}