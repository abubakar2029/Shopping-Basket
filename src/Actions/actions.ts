
type Item = {
  name: string;
  price: number;
  description: string;
  img: string;
  quantity?: number;
  id?:string
};

type NewCart = {
  type: string;
  payload: Item[];
};

type Category = {
  categoryName: string;
  items: Item[];
};

type ShoppingCategories = {
  GroceriesAndPets: Category;
  HealthAndBeauty: Category;
  ElectronicDevices: Category;
  SportsAndOutdoor: Category;
  HomeAndLifestyle: Category;
  Others: Category;
};

interface FormInputs {
  userName: string;
  userCNIC: number;
  email: string;
  country: string;
  city: string;
  password: number;
  zipCode: number;
}

type ShoppingCategoriesDispatch={
  type:string;
  payload:ShoppingCategories;
}

type AddProduct={
  type:string;
  payload:Item;

}
export type { Item, NewCart, FormInputs,AddProduct, ShoppingCategories, Category,ShoppingCategoriesDispatch };
