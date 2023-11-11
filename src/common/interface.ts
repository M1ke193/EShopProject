export interface IProduct {
  id: string;
  type: string;
  name: string;
  price: number;
  salePrice: number;
  image: string;
  optionimg?: string;
  bigImg?: string;
  rate?: number;
  review: number;
  imgList: string[];
  desc: string;
  color: string[];
}

export interface ICartProduct extends IProduct {
  selected: boolean;
  quantity: number;
}

export interface ICategory {
  name: string;
  image: string;
}
