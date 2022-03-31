import {useEffect, useState} from 'react'
import { getActor } from '../lib/service/movieservice/movieService'

export default function Movie () {
    const [actor, SetActor] = useState([])

    const getData = async () => {
        const actors = await getActor([])
        SetActor(actors)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Actors</h1>
            {actor.map((actors) => (
                <h1 key={actors._id}>actors</h1>
            ))}
        </div>
    )
}