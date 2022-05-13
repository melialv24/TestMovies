
import CSS from 'csstype'

export type TContainer = {
    $image: string
}

export type TGenres = {
    id: number
    name: string
}

export type TProductionCompanies = {
    id: number
    logo_path: string
    name?: string
    origin_country?: string
}

export type TDataMovies = {
    adult: boolean
    backdrop_path: string
    genres: TGenres[]
    homepage: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    tagline: string
    production_companies:[{}]
}