import { useContext } from "react";
import AuthProvider, { AuthContext } from "../Authentication/AuthProvider";

const useFormContext = () => {
  return useContext(AuthContext);
};

export default useFormContext;
