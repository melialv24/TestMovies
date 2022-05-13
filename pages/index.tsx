import Head from 'next/head'
import Image from 'next/image'
import { TestMovie } from '../view/movies/listMovies/components'

export default function Home() {
  return (
      <div>
          <TestMovie/>
      </div>
  )
}
