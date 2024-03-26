import { instance } from "./instance";


export const characterAPI = {
     getAllCharacters(params) { 
        return  instance.get('character', {params})
    }
}
