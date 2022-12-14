export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'PeanutButte7/portfolio',
        branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
        {
            name: 'projects',
            label: 'Projects',
            folder: 'projects',
            create: true,
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    widget: 'string',
                },
                {
                    name: 'description',
                    label: 'Description',
                    widget: 'string',
                },
                {
                    name: 'priority',
                    label: 'Priority',
                    widget: 'number',
                    default: 0,
                },
                {
                    name: 'link',
                    label: 'Link',
                    widget: 'string',
                    required: false,
                },
                {
                    name: 'type',
                    label: 'Type',
                    widget: 'select',
                    options: ['web', 'design', 'game'],
                },
                {
                    name: 'image',
                    label: 'Image',
                    widget: 'image',
                },
            ],
        }
    ],
};
