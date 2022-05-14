export type Results = {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String 
    genre_ids:[Int]
    id: ID
    original_title: String
    original_language: String
    title: String 
    backdrop_path: String
    vote_count: Int
    video: Boolean 
}

export type TDiscoverMovies = {
    discoverMovies: {
        page: Int
        results: [Results]
    }
}


export type TListMoviesV = {
    data: {
        data: TDiscoverMovies,
        loading?: boolean
    }
}

