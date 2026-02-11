import { useForm } from "react-hook-form";
import FormInput from "../../components/utils/FormInput";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="!min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logos/horizontal-logo.svg"
            alt="logo"
            className="w-[40%] min-w-32"
          />
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">
          Create an account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormInput
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            register={register}
            error={errors.name}
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter email"
            register={register}
            error={errors.email}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Create password"
            register={register}
            error={errors.password}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            register={register}
            error={errors.confirmPassword}
          />

          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Register
          </button>
        </form>


{/* Divider */}
<div className="flex items-center gap-2 my-4">
  <div className="flex-1 h-px bg-gray-200"></div>
  <span className="text-xs text-gray-400">OR</span>
  <div className="flex-1 h-px bg-gray-200"></div>
</div>


        {/* Google Sign Up */}
<button
  type="button"
  className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
  onClick={() => console.log("Google signup")}
>
  
  <FcGoogle className="text-xl" />
  <span className="text-sm font-medium text-gray-700">
    Continue with Google
  </span>
</button>




<Link to="/auth/login">
    <p className="text-sm text-center mt-4 text-lightGray">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer">
            Login
          </span>
        </p>
</Link>
      
      </div>
    </div>
  );
}
