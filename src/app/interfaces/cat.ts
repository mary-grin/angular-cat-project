export interface Cat {
  id: string,
  breeds: CatBreed[],
  url: string
}

export interface CatBreed {
  name: string,
  description: string
}
