import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav">
      <div className="container">
        <Link to={"/"} className="navbar-brand d-flex align-items-center gap-2">
          <img src="/public/logo.PNG.png" width={50} height={50} alt="Logo" />
          <div className="d-flex flex-column justify-content-center align-items-start">
            <h3 className="m-0 h4">عدسة</h3>
            <span className="m-0 d-none d-md-block subtitle">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <button
            className="btn-close btn-close-white d-lg-none close-menu-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-label="Close navigation"
          ></button>

          <div className="nav-content-wrapper">
            <div className="navbar-nav nav-links-container gap-lg-3">
              <NavLink
                className={({ isActive }) =>
                  `nav-link links-nav ${isActive ? "active" : ""}`
                }
                to="/"
                end
              >
                الرئيسية
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link links-nav ${isActive ? "active" : ""}`
                }
                to="/blog"
              >
                المدونة
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link links-nav ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                من نحن
              </NavLink>
            </div>

            <div className="mobile-action-btn d-lg-none mt-4 w-100">
              <Link
                to={"/blog"}
                className="reding-start rounded-5 fw-bolder w-100 text-center"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav-overlay w-100 p-1">
            <button
              className="btn-close btn-close-white d-lg-none close-menu-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-label="Close navigation"
            ></button>

            <div className="nav-content-wrapper">
              <div className="navbar-nav nav-links-container gap-lg-3">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link links-nav ${isActive ? "active" : ""}`
                  }
                  to="/"
                  end
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link links-nav ${isActive ? "active" : ""}`
                  }
                  to="/blog"
                >
                  المدونة
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link links-nav ${isActive ? "active" : ""}`
                  }
                  to="/about"
                >
                  من نحن
                </NavLink>
              </div>

              <div className="mobile-action-btn d-lg-none mt-4 w-100">
                <Link
                  to={"/blog"}
                  className="reding-start rounded-5 fw-bolder w-100 text-center"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <div className="d-flex align-items-center gap-3">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <Link to={"/blog"} className="reding-start rounded-5 fw-bolder">
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
