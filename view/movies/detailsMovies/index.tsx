import { useLazyQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { DetailsMoviesV } from "./components"
import {FIND_MOVIE} from './queries'

export const DetailsMoviesC = () => {
    // States and Variables
    const router = useRouter()
    const [getMovie, { data, loading }] = useLazyQuery(FIND_MOVIE)
    
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

    
    return (
        <DetailsMoviesV
            data={{
                data,
                loading
            }}
        />
    )
}