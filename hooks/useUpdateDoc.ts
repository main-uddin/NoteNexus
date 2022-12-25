import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updateUserDoc } from "../services/firebaseFunc";
import { useAuthStore } from "../store";

const useUpdateDoc = (collectionName: string) => {
  const queryClient = useQueryClient();

  const authToken = useAuthStore(
    (store: any) => store.authToken
  );

  const { mutate, isLoading, isError } =
    useMutation(
      async (updatedObj: any) => {
        return updateUserDoc(
          collectionName,
          authToken,
          updatedObj
        );
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            "user-data",
          ]);
        },
      }
    );

  return { mutate, isLoading, isError };
};

export default useUpdateDoc;
