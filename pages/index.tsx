import Head from 'next/head'
import Image from 'next/image'
import { ListMoviesC } from '../view/movies/listMovies/index'

export default function Home() {
  return (
      <div>
          <ListMoviesC/>
      </div>
  )
}
