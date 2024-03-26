import { instance } from "./instance";

export const locationAPI = {
    getAllLocation(params) {
        return instance.get('/location', {params})
    }
}