import client from './client'

const movieFields = `
title, 
"actor": actor->{FullName, "name": name.current}
`

const actorFields = `
_id,
name,
"slug": slug.current,
`
export const getMovie = async () =>{
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`
    )
    return data
}

export const getActor = async () =>{
    const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`
    )
    return data
}

export async function getMoviesByActor() {
    const data = await client.fetch(
        `*[_type == "movie"]{${movieFields}}`
    )
    return data
}
