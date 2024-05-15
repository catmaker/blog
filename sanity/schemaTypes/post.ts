export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'user',
        },
      ],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'number',
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'object',
          fields: [
            {
              title: 'Nickname',
              name: 'nickname',
              type: 'string',
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.Username',
      media: 'photo',
    },
  },
}
