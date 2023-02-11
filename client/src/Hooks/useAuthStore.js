import { useDispatch, useSelector } from "react-redux";
import authApi from "../Api/authApi";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../Helpers/Index";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await authApi.post("/auth/login", { email, password });
      localStorage.setItem("token", data.jwtToken);
      localStorage.setItem("token-init-date", new Date().getTime());
      localStorage.setItem("uid", data.uid);
      dispatch(onLogin({ name: data.name, uid: data.uid }));
      return true;
    } catch (error) {
      dispatch(onLogout("Credenciales Incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3600);
      return false;
    }
  };

  const startRegister = async ({
    name,
    surname,
    address,
    city,
    celNumber,
    email,
    password,
    password2,
  }) => {
    dispatch(onChecking());

    try {
      const { data } = await authApi.post("/auth/register", {
        name,
        surname,
        address,
        city,
        celNumber,
        email,
        password,
        password2,
      });
      localStorage.setItem("token", data.jwtToken);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || "Error!"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await authApi.get("/auth/renew");
      localStorage.setItem("token", data.jwtToken);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const updateProfile = async (user) => {
    user;
    try {
      const { data } = await authApi.post("/auth/profile", user);
      data;

      //dispatch(onLogin({ name: data.name, uid: data.uid }));
      return true;
    } catch (error) {
      error;
      return false;
    }
  };

  const getUser = async () => {
    try {
      const { data } = await authApi.get("/auth/profile");
      //(data);

      return data;
    } catch (error) {
      error;
      return false;
    }
  };

  return {
    status,
    errorMessage,
    user,
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
    updateProfile,
    getUser,
  };
};
