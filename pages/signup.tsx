import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { LoadingSpinner } from "../components";
// import { useNoAuthRedirect } from "../hooks";
import { useAuthStore } from "../store";
import {
  initiateUserData,
  signupFunc,
} from "../services";
import { toast } from "react-hot-toast";

type InitialState = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const initialState: InitialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Signup = (): React.ReactElement => {
  const [userData, setUserData] =
    useState<InitialState>(initialState);

  // const { isAuth, loading } = useNoAuthRedirect();

  const addAuth = useAuthStore(
    (state: any) => state.addAuth
  );
  const authStatus = useAuthStore(
    (state: any) => state.authStatus
  );
  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupUser = async (): Promise<void> => {
    try {
      const uid = await signupFunc(
        userData.email,
        userData.password
      );
      await initiateUserData(
        uid,
        userData.email,
        userData.firstname,
        userData.lastname
      );
      addAuth(uid);
      router.push("/");
      toast.success(
        "user created successfully!",
        {
          position: "bottom-center",
        }
      );
    } catch (error: any) {
      toast.error(error.code, {
        position: "bottom-center",
      });
    }
  };

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>Sign Up</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="m-auto h-fit w-96 space-y-2 rounded-md border border-gray-300 bg-slate-50 p-6 shadow-md md:mt-16">
          <h1 className="text-2xl font-semibold text-gray-600">
            Sign Up
          </h1>
          <div className="space-y-1">
            <span className="flex flex-col space-y-1">
              <label htmlFor="email">
                First Name
              </label>
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="John"
                name="firstname"
                id="firstname"
                required
                value={userData.firstname}
                onChange={handleInput}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label htmlFor="email">
                Last Name
              </label>
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="Doe"
                name="lastname"
                id="lastname"
                required
                value={userData.lastname}
                onChange={handleInput}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-400 p-2"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                required
                value={userData.email}
                onChange={handleInput}
              />
            </span>
            <span className="flex flex-col space-y-1">
              <label htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-400 p-2"
                type="password"
                placeholder="**********"
                name="password"
                id="password"
                required
                value={userData.password}
                onChange={handleInput}
              />
            </span>
          </div>
          <div className="pt-3">
            <span className="flex flex-col space-y-2">
              <button
                className="rounded-sm bg-light-primary p-2 font-semibold text-white hover:bg-opacity-90 active:bg-opacity-95"
                onClick={signupUser}
              >
                Sign Up
              </button>
            </span>
            <span className="flex justify-center pt-2 font-medium text-light-primary transition-all hover:underline">
              <Link href="/login">
                Already Have an Account
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
