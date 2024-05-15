export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'Username', //API ID
      title: 'username', //UI label
      type: 'string',
    },
    {
      name: 'Name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'Email',
      title: 'email',
      type: 'string',
    },
    {
      name: 'Image',
      title: 'image',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'Username',
      subtitle: 'Name',
      media: 'image',
    },
  },
}
