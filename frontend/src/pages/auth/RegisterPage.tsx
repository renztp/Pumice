import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pumice from "../../assets/pumice-logo.png";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const notifyError = (msg: string) =>
      toast.error(msg, {
        position: "top-center",
      });

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        notifyError(error.response?.data);
      });
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex align-center mb-4">
          <img className="my-0 mx-auto" src={Pumice} />
        </div>
        <div className="mb-4">
          <label>
            <span className="flex mb-1 font-medium">Email Address </span>
            <input
              className="rounded-md border w-full border-gray-300 py-2 px-3"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
        </div>

        <div className="mb-4">
          <label>
            <span className="flex mb-1 font-medium">Full Name </span>
            <input
              className="rounded-md border w-full border-gray-300 py-2 px-3"
              type="text"
              {...register("fullName", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
        </div>

        <div className="mb-16">
          <label>
            <span className="flex mb-1 font-medium">Password </span>
            <input
              className="rounded-md font-medium w-full border border-gray-300 py-2 px-3"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-md text-white font-medium py-3 bg-blue-500 w-full block text-center"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
