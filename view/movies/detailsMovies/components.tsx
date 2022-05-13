import { FC, useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import { useRouter } from 'next/router'
import { TDataMovies } from "./types"
import { Col } from "../../components/generalStyles"
import { MoviesService } from "../../../services/movies"
import { BoxImage, BoxText, Container, ContainerColor, H1, Li, SpanSubtitle, Text } from "./styled"
import { gql, useLazyQuery } from '@apollo/client'
const FIND_MOVIE = gql`
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

export const DetailsMoviesV = () => {
    const router = useRouter()
    const [getMovie, {data, loading, error}] = useLazyQuery(FIND_MOVIE)
    //const [dataMovies, setDataMovies] = useState<TDataMovies>()
    //const { fetch, loading, data , error }  = useFetch({ service: MoviesService.getDetailMovie })
    useEffect(() => {
        // Destructure for get the id
        const { id } = router.query
        // Get the details with the id
        if (id) {
            getMovie({
                variables:{ id }
            })
        }

    },[router.query])

    /*useEffect(() => {
        // Actualize the dateMovie that we are gonna use with the response of the fetch 
        setDataMovies(data)
    }, [data])*/
    
    return (
        <>
        <header style={{height: '50px'}}>
            <div style={{ padding: '0px 25px'}}>
                <h3 style={{ color: '#625bee', fontFamily: 'sans-serif', letterSpacing: '.2px'  }}>TMDB</h3>
            </div>
        </header>
        <ContainerColor/>
        <Container image={data?.detailsMovies.poster_path}>
            { loading && loading ? <p>Loading...</p>
                : (
                    <>
                        <div style={{ display: 'block'}}>
                            <BoxImage>
                                <img 
                                    style={{
                                        width: '100%',
                                        height: '400px'
                                    }}   
                                    src={`https://image.tmdb.org/t/p/w500/${data?.detailsMovies.poster_path}`} 
                                />
                            </BoxImage>
                        </div>
                        <div style={{ display: 'block'}}>
                            <BoxText>
                                <H1>
                                    {data?.detailsMovies?.original_title || 'Title'}
                                </H1>
                                <Text>
                                    <SpanSubtitle >
                                        Description:
                                    </SpanSubtitle> 
                                    {data?.detailsMovies?.overview}
                                </Text>
                                <SpanSubtitle >
                                    Genders:
                                </SpanSubtitle>
                                <ul>
                                    {data?.detailsMovies.genres.map(x => (
                                        <Li>
                                            {x.name}
                                        </Li>
                                    ))
                                    }
                                </ul>
                                
                            </BoxText>

                        </div>
                    </>
                )
        
            }
                
        </Container>
        
        </>
    )

    
}