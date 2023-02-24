import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store";

const useNoAuthRedirect = () => {
  const [isAuth, setIsAuth] =
    useState<boolean>(false);
  const [loading, setLoading] =
    useState<boolean>(true);

  const authStatus = useAuthStore(
    (state: any) => state.authStatus
  );

  const router = useRouter();

  useEffect(() => {
    if (authStatus) {
      router.push("/notes");
    } else {
      setIsAuth(true);
      setLoading(false);
    }
  }, [authStatus]);

  return { loading, isAuth };
};

export default useNoAuthRedirect;
