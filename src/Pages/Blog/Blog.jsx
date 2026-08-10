

import data from "../../../posts.json.json";
import style from "./Blog.module.css";
import Pagination from "../../component/Pagination/Pagination";
import Footer from "../../component/Footer/Footer"; 
import { Link, NavLink, useParams, useSearchParams } from "react-router";
import React, { useState, useEffect, useRef } from "react";

export default function Blog() {
  const blogSectionRef = useRef(null);
  const { categories, posts } = data;
  const [display, setDisplay] = useState("grid");
  const [currentCategory, setCurrentCategory] = useState("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory, searchQuery]);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setCurrentCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const allCategory = ["جميع المقالات", ...categories.map((item) => item.name)];

  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      currentCategory === "جميع المقالات" || post.category === currentCategory;
    const matchSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
  const numberOfpages = Math.ceil(filteredPosts.length / 6);
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    const top =
      blogSectionRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top - 240, behavior: "smooth" });
  }
  const lastIndex = currentPage * 6;
  const firstIndex = lastIndex - 6;
  const finalPosts = filteredPosts.slice(firstIndex, lastIndex);

  return (
    < >
      <section
        className={
          style["sec-container"] +
          " position-relative overflow-hidden d-flex align-items-center justify-content-center w-100"
        }
      >
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="position-relative text-center px-4 py-5">
          <div className="hero-badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4">
            <div className="d-flex gap-1">
              <span className="dot rounded-circle" />
            </div>
            <span className="badge-text">مدونتنا</span>
          </div>
          <h1 className="hero-title text-white mb-5">
            استكشف <span className="accent">مقالاتنا</span>
          </h1>
          <p className="hero-subtitle text-secondary fw-normal mx-auto mb-5">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
        </div>
      </section>

      <section className={`container pt-3 pb-3 mb-5 ${style["section-top"]}`}>
        <div className="row justify-content-between align-items-center flex-wrap">
          <div className="col-12 col-md-3">
            <div
              className={`${style.search} d-flex justify-content-between align-items-center gap-3 rounded-3 ps-4 pe-4 pt-2 pb-2 mb-2`}
            >
              <input
                type="text"
                className="bg-transparent text-white outline-0"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="col-12 col-md-9 d-flex m-0 justify-content-end">
            <ul className="d-flex gap-2 flex-wrap justify-content-center align-items-center">
              {allCategory.map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentCategory(item)}
                  className={`${style.navLink} ${style.Name} ${
                    currentCategory === item ? style.actives : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container my-5 d-flex justify-content-between align-items-center flex-wrap gap-3">
        <span>
          <span className="opacity-75">عرض </span>
          <span className="fw-bold fs-5 text-white">
            {filteredPosts.length}{" "}
          </span>
          <span className="opacity-75"> مقالات</span>
        </span>
        <div
          className={` ${style.changer} d-flex justify-content-between align-items-center gap-1 p-2 rounded-2`}
        >
          <i
            onClick={() => setDisplay("grid")}
            className={`fa-solid fa-border-all fs-5 ${display === "grid" ? style["my-active"] : ""}`}
            style={{ cursor: "pointer" }}
          />
          <i
            onClick={() => setDisplay("list")}
            className={`fa-solid fa-bars fs-5 ${display === "list" ? style["my-active"] : ""}`}
            style={{ cursor: "pointer" }}
          />
        </div>
      </section>

      <section className="container pb-5" ref={blogSectionRef}>
        {filteredPosts.length === 0 ? (
          <div className="text-center text-secondary py-5">
            <i className="fa-solid fa-circle-exclamation fs-1 mb-3 d-block opacity-50"></i>
            <p className="fs-5">لا توجد مقالات تطابق بحثك</p>
          </div>
        ) : (
          <div className="row g-5">
            {finalPosts.map((item) => (
              <div
                className={`col-12 ${display === "grid" ? "col-md-4" : "col-12"}`}
                key={item.id}
              >
                {/* List Layout */}
                <Link
                  className="text-decoration-none text-reset"
                  to={`/blog/${item.id}`}
                >
                  {display === "list" && (
                    <div
                      className={`${style.adasa} ${style["adasa-hover"]} rounded-4 overflow-hidden d-flex flex-column`}
                    >
                      <div className="d-flex align-items-stretch flex-grow-1 flex-column flex-md-row">
                        <div
                          className={`${style["img-photo"]} ${style["img-photo-list"]} overflow-hidden flex-shrink-0`}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className={style["img-list"]}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="right d-flex flex-column justify-content-between position-relative flex-grow-1 p-3">
                          <div className="d-flex align-items-center">
                            <span
                              className={`${style.spanBrands} ${style["spanBrands-list"]} fw-bold ps-2 pe-2 pt-1 pb-1 rounded-5`}
                            >
                              {item.category}
                            </span>
                            <span
                              className={`small ${style["read-time"]} opacity-50 pe-2`}
                            >
                              <i className="fa-regular fa-clock fs-6"></i>{" "}
                              {item.readTime}
                              <span className="fs-2"> • </span>
                              <i className="fa-regular fa-calendar fs-6"></i>{" "}
                              {item.date}
                            </span>
                          </div>
                          <h4 className="fw-bold mt-2">{item.title}</h4>
                          <p className="opacity-75 small">{item.excerpt}</p>
                          <div
                            className={`${style.profile} d-flex justify-content-between align-items-center w-100 p-3`}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={item.author.avatar}
                                alt={item.author.name}
                                className="rounded-circle"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="d-flex flex-column align-items-start">
                                <h6 className="text-white m-0">
                                  {item.author.name}
                                </h6>
                                <p className="small opacity-75 m-0">
                                  {item.author.role}
                                </p>
                              </div>
                            </div>
                            <span className={style["read-more"]}>
                              اقرأ المقال
                              <i className="fa-solid fa-arrow-left-long p-2"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>

                {/* Grid Layout */}
                <Link
                  className="text-decoration-none text-reset"
                  to={`/blog/${item.id}`}
                >
                  {display === "grid" && (
                    <div
                      className={`${style.adasagrid} h-100 rounded-4 d-flex flex-column overflow-hidden position-relative`}
                    >
                      <div className={`${style["img-photo"]} overflow-hidden`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <span
                        className={`${style.spanBrands} fw-bold m-2 ps-2 pe-2 pt-1 pb-1 rounded-5 position-absolute top-0 end-0`}
                      >
                        {item.category}
                      </span>
                      <div
                        className={`${style.details} d-flex flex-column flex-grow-1`}
                      >
                        <span className="small opacity-50">
                          {item.readTime} <span className="fs-2"> • </span>{" "}
                          {item.date}
                        </span>
                        <h4 className="fw-bold mt-2">{item.title}</h4>
                        <p className="opacity-75 small">{item.excerpt}</p>
                      </div>
                      <div
                        className={`${style.profile} d-flex justify-content-between align-items-center w-100 p-3`}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={item.author.avatar}
                            alt={item.author.name}
                            className="rounded-circle"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="d-flex flex-column align-items-start">
                            <h6 className="text-white m-0">
                              {item.author.name}
                            </h6>
                            <p className="small opacity-75 m-0">
                              {item.author.role}
                            </p>
                          </div>
                        </div>
                        <div className={style["icon-grid"]}>
                          <i className="fa-solid fa-angle-left fs-6"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>


      <div className="mb-5">
        <Pagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          numberOfpages={numberOfpages}
        />
        {numberOfpages > 0 && (
          <p className="text-center text-secondary small">
            صفحة {currentPage} من {numberOfpages}
          </p>
        )}
      </div>
    </>
  );
}
