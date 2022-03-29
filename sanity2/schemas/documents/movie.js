const Movie = {
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image'
        },
        {
            name: 'actor',
            title: 'Actor',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ]
}

export default Movie;