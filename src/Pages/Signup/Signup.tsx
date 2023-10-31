import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import * as actions from "../../Actions/actions";

export default function Signup() {
  /* STORE-DISPATCH */
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<actions.FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<actions.FormInputs> = (data) => {
    /* SIGNUP-BACKEND */
    axios.post("/user-signup", data).then((res) => {
      const response = res.data;
      console.log("Signup ma ya response aya",response);
      if (response.status === "Successfully Registered") {
        dispatch({
          type: "Logged-In",
          payload: response.userData,
        });
        navigate(`/${response.userData.id}`);
      }
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-2xl font-bold text-gray-900">
            Register
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                autoComplete="given-name"
                {...register("userName")}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                CNIC
              </label>
              <input
                type="text"
                autoComplete="given-cnic"
                {...register("userCNIC")}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="99999-9999999-9"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                {...register("email")}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                autoComplete="address-level2"
                {...register("city")}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="City"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                autoComplete="country-name"
                {...register("country")}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Country"
              />
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP/Postal Code
              </label>
              <input
                type="text"
                autoComplete="postal-code"
                {...register("zipCode")}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="ZIP/Postal Code"
              />
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                autoComplete="postal-code"
                {...register("password")}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded"
            >
              Signup Now !
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
