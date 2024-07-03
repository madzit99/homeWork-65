import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosApi from "../../axiosApi";

const Toolbar: React.FC = () => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosApi.get("pages.json");
      const keys = Object.keys(response.data);
      setPages(keys);
    };

    void fetchData();
  }, []);

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Дз 65
        </NavLink>
        <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Главная
            </NavLink>
          </li>
          {pages.map((page) => (
            <li key={page} className="nav-item">
              <NavLink to={`pages/${page}`} className="nav-link">
                {page}
              </NavLink>
            </li>
          ))}
          <li className="nav-item">
            <NavLink to="/create" className="nav-link">
              Создать
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/edit" className="nav-link">
              Редактировать
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
