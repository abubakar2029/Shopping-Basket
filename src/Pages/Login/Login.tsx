import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../Actions/ActionTypes';


interface FormInputs {
  email: string
  password: number
}

function Login() {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm<FormInputs>();
  let dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormInputs> = data => {
    /* sending data to backend for authentication */
    axios.post("/user-login", data).then(resp => {
      let response = resp.data;
      toast(response);
      if (response.status1 === "Logged In") {
        if (response.userData.cartProducts) {
          dispatch({
            type: ActionType.USER_CART,
            payload: response.userData.cart
          })
        }
        navigate(`/${response.userData.id}`);
      }
    })
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className='text-left'>
          <h1 className=" text-2xl text-center font-bold text-gray-900">
            Login to your account
          </h1>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                {...register('email', { required: true })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div>
              <input
                type="text"
                {...register('password', { required: true })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder='Password'
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-3 px-5 border border-blue-700 rounded"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
export { Login }