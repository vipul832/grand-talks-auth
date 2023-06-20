import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../App/feature/userSlice";
import { setSignInUser } from "../../App/feature/authSlice";
import HomeTabs from "../Tabs/HomeTabs/HomeTabs";
import IntroTitle from "../Intro/IntroTitle";
import { toast } from "react-hot-toast";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getLoginData() {
      const responce = await fetch("/api/auth/login/success", {
        method: "GET",
        credentials: "include",
      });
      const data = await responce.json();
      if (data.success === true) {
        const user = {
          user: {
            _id: data.user[0]._id,
            username: data.user[0].username,
            email: data.user[0].email,
            profilePic: data.user[0].profilePic,
            type: data.user[0].type,
          },
        };
        dispatch(setSignInUser());
        dispatch(setUser(user));
        toast.success("Login Successful");
      }
    }
    getLoginData();
  }, []);
  return (
    <>
      <IntroTitle />
      <HomeTabs />
    </>
  );
};

export default HomePage;
