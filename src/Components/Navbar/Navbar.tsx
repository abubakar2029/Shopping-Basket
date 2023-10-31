import { Fragment } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import emailjs from "emailjs-com";

import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import * as actions from "../../Actions/actions";
import { useState } from "react";
import { ActionType } from "../../Actions/ActionTypes";

import { useDispatch, useSelector } from "react-redux";

const navigation = [{ name: "Shopping Basket", href: "#", current: true }];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cartProducts: actions.Item[] = useSelector(
    (store: any) => store.ShoppingCArt
  );
  console.log("Products", cartProducts);
  const [qty, setqty] = useState<Number>(0);

  const newQuantity = (product: actions.Item, sign: string) => {
    switch (sign) {
      case ActionType.SUBTRACT:
        dispatch({
          type: ActionType.SUBTRACT,
          payload: product,
        });
        break;

      case ActionType.ADD:
        dispatch({
          type: ActionType.ADD,
          payload: product,
        });
        break;
    }
  };

  const Login: any = useSelector((store: any) => store.UserLogin);
  console.log("USer LOgin", Login);

  function checkout() {
    dispatch({
      type: ActionType.CHECKED_OUT,
      payload: null,
    });
    let temp = {
      userName: Login.userName,
      userGmail: Login.email,
    };

    emailjs
      .send("service_lwo28p9", "template_mxquyqt", temp, "SJMP85qB5DEtSqQuI")
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  console.log();

  function removeItem(product: actions.Item) {
    console.log("In remove functiion");

    dispatch({
      type: ActionType.REMOVE_TO_CART,
      payload: product,
    });
  }

  return (
    <>
      <Disclosure as="nav" className=" bg-primary-color">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>

                  {/* Nav Buttons */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-blue-600 text-white"
                              : "text-gray-300 hover:bg-blue-400 hover:text-white",
                            "rounded-md px-3 py-3 text-lg font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full border p-1 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={() => setOpen(true)}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Shopping Cart Start */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartProducts !== null
                                ? cartProducts.map((product) => (
                                    <li className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={product.img}
                                          alt={product.name}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a>{product.name}</a>
                                            </h3>
                                            <p className="ml-4">
                                              {product.price}
                                            </p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {/* {product.color} */}
                                            Blue
                                          </p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <div className="w-full pr-3 flex justify-between text-gray-500">
                                            <span>
                                              Qty {product.quantity || 0 + 1}
                                            </span>
                                            <span className="flex">
                                              <button
                                                data-action="decrement"
                                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-fit w-7 rounded-l cursor-pointer outline-none"
                                                onClick={() =>
                                                  newQuantity(
                                                    product,
                                                    ActionType.SUBTRACT
                                                  )
                                                }
                                              >
                                                <span className="m-auto text-2xl font-thin">
                                                  −
                                                </span>
                                              </button>
                                              <p className="outline-none flex items-center justify-center focus:outline-none w-8 bg-gray-200 font-semibold text-md text-gray-700">
                                                {product.quantity || 0 + 1}
                                              </p>
                                              <button
                                                data-action="increment"
                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-fit w-7 rounded-r cursor-pointer"
                                                onClick={() =>
                                                  newQuantity(
                                                    product,
                                                    ActionType.ADD
                                                  )
                                                }
                                              >
                                                <span className="m-auto text-2xl font-thin">
                                                  +
                                                </span>
                                              </button>
                                            </span>
                                          </div>
                                          <div className="flex">
                                            <button
                                              type="button"
                                              className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500"
                                              onClick={() =>
                                                removeItem(product)
                                              }
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))
                                : null}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <button
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            onClick={checkout}
                          >
                            Checkout
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export { Navbar };
