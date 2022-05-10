import { FC, useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import { useRouter } from 'next/router'
import { TDataMovies } from "./types"
import { type } from "os"

export const DetailsMoviesV = () => {
    const API_KEY = "d9dfcdac6317f23e3fa30fe7c92c08df"
    const BASE_URL = "https://api.themoviedb.org/3"
    if (typeof window !== "undefined") {
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        const id = urlParams.get('id');
        console.log(id);
    }
    
    const [idMovies, setIdMovies] = useState('')
    const [dataMovies, setDataMovies] = useState<TDataMovies>()
    

    return (
        <div style={{ width: '100% '}}>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                {/*<div>
                    <img style={{ width: '200px', height: '200px' }} src={`https://image.tmdb.org/t/p/w500/${dataMovies?.poster_path}`} />
                </div>*/}
            </div>
        </div>
    )
}