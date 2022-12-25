import { useQuery } from "@tanstack/react-query";
import { getSingleDoc } from "../services";
import { useAuthStore } from "../store";

const useGetDoc = (
  collectionName: string
): {
  data: any;
  isLoading: boolean;
  isError: boolean;
} => {
  const { authToken, authStatus } = useAuthStore(
    (store: any) => store
  );

  const { data, isLoading, isError } = useQuery(
    ["user-data"],
    async () => {
      return getSingleDoc(
        collectionName,
        authToken
      );
    },
    {
      enabled: authStatus,
    }
  );

  return { data, isLoading, isError };
};

export default useGetDoc;
