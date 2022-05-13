import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import Link from 'next/link'
import { BoxContainer, BoxImage, Container, H1, SpanLink } from './styled'
import { MoviesService } from '../../../services/movies'
import { gql, useQuery } from '@apollo/client'

const GET_MOVIES = gql`
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

export const TestMovie = () => {
    const {data, error, loading} = useQuery(GET_MOVIES)
    return (
        <div>  
            <header style={{height: '50px'}}>
                <div style={{ padding: '0px 25px'}}>
                    <h3 style={{ color: '#625bee', fontFamily: 'sans-serif', letterSpacing: '.2px'  }}>TMDB</h3>
                </div>
            </header>
            
            <Container/>
            <BoxContainer>
                {loading 
                    ? <p>Loading...</p>
                    :( <>
                            {data && data?.discoverMovies.results.map(x => (
                                <BoxImage 
                                    key={x.id}
                                >
                                    <div >
                                        <img 
                                            style={{ 
                                                borderRadius: '20px',
                                                width: 'auto', 
                                                height: '200px',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                
                                            }} 
                                            src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`} 
                                        />
                                    </div>
                                    <h4 data-toggle="tooltip" style={{ display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: 'white', fontFamily: 'sans-serif', letterSpacing: '1px'}}>{x.title}</h4>
                                    <div>
                                        <Link  
                                            href={`/detailsMovies?id=${x.id}`}
                                        > 
                                            <SpanLink>
                                                Details
                                            </SpanLink>
                                        </Link>
                                    </div>
                                </BoxImage>
                            ))}
                        </>
                    )
                }
            </BoxContainer>
        </div>
    )
}