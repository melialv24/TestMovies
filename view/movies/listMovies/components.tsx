import React, { FC } from 'react'
import Link from 'next/link'
import { BoxContainer, BoxImage, Container, H1, H4, SpanLink } from './styled'
import { TListMoviesV } from './types'
import { HeaderC } from "../../components/header"

export const ListMoviesV: FC<TListMoviesV> = ({
    data:{
        data, 
        loading
    }
}) => (
        <div>  
            <HeaderC/>
            <Container/>
            <BoxContainer>
                {loading 
                    ? <p>Loading...</p>
                    :( <>
                            {data && data?.discoverMovies.results.map(x => (
                                <BoxImage 
                                    key={x.id}
                                >
                                    <div >
                                        <img 
                                            style={{ 
                                                borderRadius: '20px',
                                                width: 'auto', 
                                                height: '200px',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                
                                            }} 
                                            src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`} 
                                        />
                                    </div>
                                    <H4>
                                        {x.title}
                                    </H4>
                                    <div>
                                        <Link  
                                            href={`/detailsMovies?id=${x.id}`}
                                        > 
                                            <SpanLink>
                                                Details
                                            </SpanLink>
                                        </Link>
                                    </div>
                                </BoxImage>
                            ))}
                        </>
                    )
                }
            </BoxContainer>
        </div>
)
