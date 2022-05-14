import { gql } from '@apollo/client'

export const GET_MOVIES = gql`
    query {
        discoverMovies {
        page
        results {
            poster_path
            adult
            overview
            release_date
            genre_ids
            id
            original_title
            original_language
            title
            backdrop_path
        }
        }
    }
`