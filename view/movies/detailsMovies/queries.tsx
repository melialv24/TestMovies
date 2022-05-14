import { gql } from '@apollo/client'

export const FIND_MOVIE = gql`
    query DetailsMovies($id: ID!) {
        detailsMovies(id: $id) {
            adult
            poster_path
            id
            original_title
            production_countries {
                iso_3166_1
            }
            budget
            backdrop_path
            genres {
                name
                id
            }
            original_language
            overview
            production_companies {
                id
                logo_path
                name
            }
        }
    }
`
