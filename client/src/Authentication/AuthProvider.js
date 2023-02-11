import { createContext, useState } from "react";
import { publicationData } from "../Pages/RegisterProduct/DataPublications";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [publication, setPublication] = useState(publicationData);
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setPublication((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const contextValue = {
    user,
    publication,
    setPublication,
    handleChange,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
