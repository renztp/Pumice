import Pumice from "../../assets/pumice-logo.png";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  username: string;
  password: string;
};

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex align-center mb-4">
          <img className="my-0 mx-auto" src={Pumice} />
        </div>
        <div className="mb-4">
          <label>
            <span className="flex mb-1 font-medium">Email Address: </span>
            <input
              className="rounded-md border w-full border-gray-300 py-2 px-3"
              type="email"
              {...register("email", {required: true})}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </label>
        </div>

        <div className="mb-4">
          <label>
            <span className="flex mb-1 font-medium">Username: </span>
            <input
              className="rounded-md border w-full border-gray-300 py-2 px-3"
              type="text"
              {...register("username", {required: true})}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </label>
        </div>

        <div className="mb-16">
          <label>
            <span className="flex mb-1 font-medium">Password: </span>
            <input
              className="rounded-md font-medium w-full border border-gray-300 py-2 px-3"
              type="password"
              {...register("password", {required: true})}
            />
            {errors.password && <span className="text-red-500">This field is required</span>}
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
