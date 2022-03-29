const Actor = {
    name: 'actor',
    title: 'Actor',
    type: 'document',
    fields: [
        {
            name: 'fullname',
            title: 'FullName',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            }
        }

    ]
}

export default Actor;