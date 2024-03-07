export interface TypeCard {
  id: number,
  title: string,
  description: string,
  image: string
}

export interface TypeSubmenu {
  text: string,
  subMenu?: TypeItemSubmenu[]
}

export interface TypeItemSubmenu {
  id: number,
  text: string
}