import React from 'react'
import Image from 'next/image'
import { useFetch } from '../../../hooks/useFetch'
import Link from 'next/link'


export const TestMovie = () => {
    const API_KEY = "d9dfcdac6317f23e3fa30fe7c92c08df"
    const BASE_URL = "https://api.themoviedb.org/3"
    // eslint-disable-next-line
    const {loading, data , error}  = useFetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    console.log(data);
    return (
        <>  
            <h1 style={{ padding: '5px', textAlign:'center'}}> Movies </h1>
            <hr/>
            
            <div style={{ padding: '30px', width:'70%',margin:'auto', display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
                {data?.results.map(x => (
                    <div style={{ padding: '25px', textAlign: 'center', maxWidth: '200px'}}>
                        <div style={{ boxShadow: '0px 2px 7px #00000029'}}>
                        <img style={{ width: '200px', height: '200px' }} src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`} />
                        </div>
                        <h4>{x.title}</h4>
                        <div>
                            <Link  href={`/detailsMovies?id=${x.id}`}> Detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}