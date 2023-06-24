
export interface User {
  name: string
  token: string
  username: string
}

export interface PropsUserContext {
  user: User | null
  setUserData: (user: User) => undefined
  deleteUserData: () => undefined
  token: User['token'] | null
  setToken: (token: User['token']) => undefined
}

export interface PropsAxios {
  method: 'get' | 'post' | 'put' | 'delete'
  endpoint: string
  data?: any
  headers?: any
}

export interface Taps {
  componentName: 'Home' | 'Incomes' | 'Expenditures' | 'Customers'
  name: string
  current: boolean
}

export interface CustomerList {
  id: number
  name: string
  number: int
  state: int
  createdAt: string
  updatedAt: string
}
