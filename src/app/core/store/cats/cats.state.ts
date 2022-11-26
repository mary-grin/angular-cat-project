export interface ICat {
  id: string,
  url: string,
  name: string,
  description: string
}

export interface CatsState {
  cats: ICat[]
}

export const CatsInitialState: CatsState = {
  cats: []
}
