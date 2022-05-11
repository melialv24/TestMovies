import { FC, useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import { useRouter } from 'next/router'
import { TDataMovies } from "./types"
import { Col } from "../../components/generalStyles"
import { MoviesService } from "../../../services/movies"
import { BoxImage, BoxText, Container, H1, Li, SpanSubtitle, Text } from "./styled"

export const DetailsMoviesV = () => {
    const router = useRouter()
    const [dataMovies, setDataMovies] = useState<TDataMovies>()
    const { fetch, loading, data , error }  = useFetch({ service: MoviesService.getDetailMovie })

    useEffect(() => {
        // Destructure for get the id
        const { id } = router.query
        // Get the details with the id
        if (id) fetch(id)

    },[router.query])

    useEffect(() => {
        // Actualize the dateMovie that we are gonna use with the response of the fetch 
        setDataMovies(data)
    }, [data])
    

    return (
        <Container>
                <Col
                    xs='xs-12'
                    sm='sm-12'
                    md='md-12'
                    lg='lg-4'
                    xl='xl-4'
                    height='100%'
                >
                    <BoxImage>
                        <img 
                            style={{
                                width: '300px',
                                height: '400px'
                            }}   
                            src={`https://image.tmdb.org/t/p/w500/${dataMovies?.poster_path}`} 
                        />
                    </BoxImage>
                </Col>
                <Col
                    xs='xs-12'
                    sm='sm-12'
                    md='md-12'
                    lg='lg-8'
                    xl='xl-8'
                    height='100%'
                >
                    <BoxText>
                        <H1>
                            {dataMovies?.original_title || 'Title'}
                        </H1>
                        <Text>
                            <SpanSubtitle >
                                Description:
                            </SpanSubtitle> 
                            {dataMovies?.overview}
                        </Text>
                        <SpanSubtitle >
                            Genders:
                        </SpanSubtitle>
                        <ul>
                            {dataMovies?.genres.map(x => (
                                <Li>
                                    {x.name}
                                </Li>
                            ))
                            }
                        </ul>
                        
                    </BoxText>

                </Col>
        </Container>
    )
}