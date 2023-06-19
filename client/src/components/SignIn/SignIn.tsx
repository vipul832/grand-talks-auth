import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { setUser } from "../../App/feature/userSlice";
import { useLoginUserMutation } from "../../App/api/authApi";
import { signInSchema } from "../../validation/signInSchema";
import { getAuthStatus, setSignInUser } from "../../App/feature/authSlice";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const handleGoogle = () => {
  window.open("/api/auth/google", "_self");
};
const handleGitHub = () => {
  window.open("/api/auth/github", "_self");
};

const SignIn = () => {
  const [loginUser] = useLoginUserMutation();
  const { authStatus } = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      try {
        const userInfo = await loginUser(values).unwrap();
        //toast
        toast.success(userInfo.message);
        dispatch(setUser(userInfo));
        dispatch(setSignInUser());
        navigate("/");
      } catch (error: any) {
        toast.error(error?.data?.message);
      }
    },
  });

  if (authStatus) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[28rem] shadow flex justify-center rounded-lg">
        <Card color="transparent" shadow={false} className="p-3">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <label htmlFor="email">
                Email <sup className="text-red-500">*</sup>
              </label>
              <Input
                id="email"
                size="lg"
                label="Email"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.email && formik.touched.email ? true : false
                }
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              ) : null}
              <label htmlFor="password">
                Password <sup className="text-red-500">*</sup>
              </label>
              <Input
                id="password"
                type="password"
                size="lg"
                label="Password"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.password && formik.touched.password
                    ? true
                    : false
                }
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>

            <Button
              className="mt-6"
              color="deep-purple"
              fullWidth
              type="submit"
            >
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-purple-500 transition-colors hover:text-blue-700"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
          <div>
            <p className="font-bold text-center">OR</p>
            <hr className="w-full rounded bg-gray-500 my-2" />
          </div>

          <Button
            className="mt-2 flex justify-center items-center"
            color="deep-purple"
            onClick={handleGoogle}
          >
            <FcGoogle className="text-lg mr-2" />
            Sign in with Google
          </Button>
          <Button
            className="mt-2 flex justify-center items-center"
            color="deep-purple"
            onClick={handleGitHub}
          >
            <AiFillGithub className="text-lg mr-2" />
            Sign in with GitHub
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
