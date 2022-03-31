import { useState } from "react"
import getMovie from '../lib/service/movieService'

const Movies = () => {
    const [data, setData] = useState([]);
    
    const handleClick = async () => {
    const data = await getMovie();
    setData(data);
};

    return (
    <main>
        {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
        <button type="button" onClick={handleClick}>Get Content</button>
    </main>)
}

export default Movies;