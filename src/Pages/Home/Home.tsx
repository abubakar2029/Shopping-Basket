import axios from "axios";
import { useEffect, useState } from "react";
import * as actions from "../../Actions/actions";
import { useDispatch } from "react-redux";
import { ActionType } from "../../Actions/ActionTypes";
import { Dialog } from "@headlessui/react";

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<actions.Item[]>([]);
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<actions.Item>({
    name: "temp",
    price: 988,
    description: "temp",
    img: "tempIng",
    quantity: 0,
    id: "01",
  });
  useEffect(() => {
    axios.post("/productsData").then((resp) => {
      setProducts(resp.data);
    });

    axios.post("/allCatogeries").then((resp) => {
      console.log("All Categories", resp.data);

      dispatch({
        type: ActionType.ALL_CATEGORIES,
        payload: resp.data,
      });
    });
  }, []);
  console.log(products);

  // ADD-TO-CART
  function addToCart(productData: actions.Item) {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: productData,
    });
  }

  // UI Starts
  return (
    <>
      {/* <AllCategoriesBar /> */}
      {/* Product Dialog Panel */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="absolute m-auto top-1/2 left-1/2 bg-white p-4 -translate-x-1/2  text-center rounded-2xl">
          <Dialog.Panel>
            <Dialog.Title className="md:text-xl font-bold">
              {currentProduct.name}
            </Dialog.Title>
            <img
              src={currentProduct.img}
              alt={currentProduct.name}
              className="max-sm:h-32 h-52 lg:h-72 w-full rounded"
            />
            <div className="flex flex-wrap flex-col md:text-lg lg:text-xl">
              <p className="text-left">{currentProduct.description}</p>
              <div className="flex justify-between ">
                <span className="font-semibold">Price</span>
              <p className="text-left text-lg font-semibold">
                ${currentProduct.price}
              </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className=" hover:bg-blue-400 bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Go back!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className="flex flex-wrap justify-around gap-y-5 lg:gap-y-5">
        {products.map((product) => {
          return (
            <div className="w-80 border relative border-gray-300/30 h-96 flex flex-col gap-1 rounded-lg shadow-md pt-2.5 px-3.5">
              {/* Image */}
              <div
                className="h-3/5 drop-shadow-md rounded overflow-hidden"
                onClick={() => {
                  setIsOpen(true);
                  setCurrentProduct(product);
                }}
              >
                <img
                  src={`${product.img}`}
                  alt={`${product.name}`}
                  className="w-full h-full peer"
                />
                <img
                  className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="product image"
                />
                <svg
                  className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                  />
                </svg>
                <span className="absolute top-0 left-0 m-1 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  39% OFF
                </span>
              </div>
              {/* Content Div */}
              <div className="text-left flex flex-col gap-1.5">
                <p className="font-semibold text-blue-400 text-lg h-">
                  {product.name}
                </p>
                {/* Rating line */}
                <p className="text-2xl font-bold text-tertiary-color">
                  ${product.price}
                  <span className="text-base font-normal line-through pl-2.5">
                    $15.00
                  </span>
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="hover:border-white/40 absolute bottom-0 w-91% flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Home };
