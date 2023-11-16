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
  wishlist?: boolean;
}

export interface ICartProduct extends IProduct {
  selected: boolean;
  quantity: number;
}

export interface ICategory {
  name: string;
  image: string;
}

export interface IuserData {
  email: string;
  img: string;
  name: string;
  password: string;
}
