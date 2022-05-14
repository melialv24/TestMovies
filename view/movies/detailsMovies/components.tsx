import { FC } from "react"
import { TDetailsMoviesV } from "./types"
import { BoxImage, BoxText, Container, ContainerColor, H1, Li, SpanSubtitle, Text } from "./styled"
import { HeaderC } from "../../components/header"

export const DetailsMoviesV: FC<TDetailsMoviesV> = ({
    data: {
        data,
        loading
    }
}) => {
    
    return (
        <>
        <HeaderC/>
        <ContainerColor/>
        <Container image={data?.detailsMovies.poster_path}>
            { loading && loading ? <p>Loading...</p>
                : (
                    <>
                        <div style={{ display: 'block'}}>
                            <BoxImage>
                                <img 
                                    style={{
                                        width: '100%',
                                        height: '400px'
                                    }}   
                                    src={`https://image.tmdb.org/t/p/w500/${data?.detailsMovies.poster_path}`} 
                                />
                            </BoxImage>
                        </div>
                        <div style={{ display: 'block'}}>
                            <BoxText>
                                <H1>
                                    {data?.detailsMovies?.original_title || 'Title'}
                                </H1>
                                <Text>
                                    <SpanSubtitle >
                                        Description: 
                                    </SpanSubtitle> 
                                        {data?.detailsMovies?.overview}
                                </Text>
                                <SpanSubtitle >
                                    Genders:
                                </SpanSubtitle>
                                <ul>
                                    {data?.detailsMovies.genres.map(x => (
                                        <Li>
                                            {x.name}
                                        </Li>
                                    ))
                                    }
                                </ul>
                                
                            </BoxText>

                        </div>
                    </>
                )
        
            }
                
        </Container>
        
        </>
    )

    
}