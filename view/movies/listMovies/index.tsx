import { useLazyQuery, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { ListMoviesV } from "./components"
import {GET_MOVIES} from './queries'

export const ListMoviesC = () => {
    // States and Variables
    const {data, loading} = useQuery(GET_MOVIES)
    
    return (
        <ListMoviesV
            data={{
                data,
                loading
            }}
        />
    )
}