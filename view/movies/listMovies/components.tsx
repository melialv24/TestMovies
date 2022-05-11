import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import Link from 'next/link'
import { BoxContainer, BoxImage, H1, SpanLink } from './styled'
import { MoviesService } from '../../../services/movies'


export const TestMovie = () => {
    const {loading, data , error}  = useFetch({ service: MoviesService.getListMovies, init: true })
    
    return (
        <>  
            <H1> 
                Movies 
            </H1>
            <hr/>
            
            <BoxContainer>
                {data?.results.map(x => (
                    <BoxImage 
                        key={x.id}
                    >
                        <div >
                            <img 
                                style={{ 
                                    width: '200px', 
                                    height: '200px',
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    
                                }} 
                                src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`} 
                            />
                        </div>
                        <h4>{x.title}</h4>
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
            </BoxContainer>
        </>
    )
}