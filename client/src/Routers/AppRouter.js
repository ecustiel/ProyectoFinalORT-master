/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import { useAuthStore } from "../Hooks/useAuthStore";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import PerfilPage from "../Pages/PerfilPage";
import RegisterPage from "../Pages/RegisterPage";
import SearchPage from "../Pages/SearchPage";
import Pagination from "../Pages/RegisterProduct/Pagination";
import PublicationPage from "../Pages/PublicationProduct/PublicationPage";
import RegisterProductPage from "../Pages/RegisterProduct/RegisterProductPage";
import ItemsControlPage from "../Pages/HouseItemsControl/ItemsControlPage";

export default function AppRouter() {
  const { status, checkAuthToken } = useAuthStore();

  const { id } = useParams();
  id;
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {status === "not-authenticated" && (
            <>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
            </>
          )}
          {status === "authenticated" && (
            <>
              <Route exact path="/profile" element={<PerfilPage />} />
              <Route exact path="/search" element={<SearchPage />} />
              <Route exact path="/registerProduct" element={<Pagination />} />
              <Route
                exact
                path={`/publication/:id`}
                element={<PublicationPage />}
              />
              <Route
                exact
                path="/itemsControl"
                element={<ItemsControlPage />}
              />
            </>
          )}
          <Route
            exact
            path="/registerProduct"
            element={<RegisterProductPage />}
          />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="*" element={<NotFoundPage />} /> //Error 404 page
          not found
        </Routes>
      </Layout>
    </Router>
  );
}
