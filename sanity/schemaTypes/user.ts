export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username', //API ID
      title: 'Username', //UI label
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'username',
      subtitle: 'name',
    },
  },
}
