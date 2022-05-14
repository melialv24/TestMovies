import Head from 'next/head'
import Image from 'next/image'
import { HeaderC } from '../view/components/header'
import { DetailsMoviesC } from '../view/movies/detailsMovies/index'

export default function Details() {
    return (
        <div>
            <DetailsMoviesC/>
        </div>
    )
}
