import React from 'react'
import Image from 'next/image'
import { useFetch } from '../../../hooks/useFetch'
import Link from 'next/link'
import { BoxContainer, BoxImage, H1, SpanLink } from './styled'


export const TestMovie = () => {
    const API_KEY = "d9dfcdac6317f23e3fa30fe7c92c08df"
    const BASE_URL = "https://api.themoviedb.org/3"
    // eslint-disable-next-line
    const {loading, data , error}  = useFetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    console.log(data);
    return (
        <>  
            <H1> Movies </H1>
            <hr/>
            
            <BoxContainer>
                {data?.results.map(x => (
                    <BoxImage key={x.id}>
                        <div >
                            <img style={{ width: '200px', height: '200px' }} src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`} />
                        </div>
                        <h4>{x.title}</h4>
                        <div>
                            <Link  href={`/detailsMovies?id=${x.id}`}> 
                                <SpanLink>Detalles</SpanLink>
                            </Link>
                        </div>
                    </BoxImage>
                ))}
            </BoxContainer>
        </>
    )
}