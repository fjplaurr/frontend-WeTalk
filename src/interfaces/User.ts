export interface User {
  _id?: string,
  email: string,
  password: string,
  name: string,
  surname: string,
  following?: {
    user: string
  }[],
  followers?: {
    user: string
  }[],
  description?: string,
  profileImage?: {
    name: string,
    size: number,
    mimetype: string,
    url: string,
  },
}
