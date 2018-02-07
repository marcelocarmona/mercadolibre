/**
 * response object of /items
 */
export interface QueryItems {
  categories: string[];
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  // I need api authentication for this information
  // author: {
  //   name: string;
  //   lastname: string;
  // };
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
}

/**
 * response object of /items/:id
 */
export interface ItemDetail {
  // I need api authentication for this information
  // author: {
  //   name: string;
  //   lastname: string;
  // };
  item: {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    freeShipping: boolean,
    soldQuantity: number,
    description: string
  };
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
