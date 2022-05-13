/* eslint-disable no-unused-vars */
import axios from 'axios'

export class MoviesService {
    static getListMovies = async () => {
        const res = await axios.get(`${process.env.BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
        return res.data
    }

    static getDetailMovie = async (id: string) => {
        const res = await axios.get(`${process.env.BASE_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
        return res.data
    }
}
