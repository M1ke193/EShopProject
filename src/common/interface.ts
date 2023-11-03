export interface IProduct {
  id: string;
  type: string;
  name: string;
  price: number;
  sale: number;
  image: string;
  optionimg?: string;
  selected?: boolean;
  rate?: number;
  review: number;
  imgList: string[];
  desc: string;
  color: string[];
}

export interface ICategory {
  name: string;
  image: string;
}
