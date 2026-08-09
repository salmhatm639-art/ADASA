

import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import data from "../../../posts.json.json";

const categoryIcons = {
  إضاءة: "fa-sun",
  بورتريه: "fa-user",
  "مناظر طبيعية": "fa-mountain",
  تقنيات: "fa-sliders",
  معدات: "fa-gear",
};

export default function HeroSection() {
  const posts = data.posts;
  const { categories } = data;
  const [email, setEmail] = useState("");

  const latestPosts = posts.slice(3, 6).length
    ? posts.slice(3, 6)
    : posts.slice(0, 3);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    console.log("subscribed:", email);
    setEmail("");
  };

  return (
    <>
      <section className="sec-container position-relative overflow-hidden d-flex align-items-center justify-content-center w-100">
        <div className="hero-grid" />

        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="position-relative text-center px-4 py-5">
          <div className="hero-badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4">
            <div className="d-flex gap-1">
              <span className="dot rounded-circle" />
              <span className="dot rounded-circle" />
            </div>
            <span className="badge-text">مرحباً بك في عدسة</span>
          </div>
          <h1 className="hero-title text-white mb-5">
            اكتشف <span className="accent">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="hero-subtitle text-secondary fw-normal mx-auto mb-5">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="hero-btns d-flex flex-wrap justify-content-center gap-3">
            <Link
              to="/blog"
              className="btn-orange d-inline-flex align-items-center gap-2"
            >
              استكشف المقالات
              <span style={{ fontSize: "18px" }}>←</span>
            </Link>

            <Link
              to="#"
              className="btn-ghost d-inline-flex align-items-center gap-2"
            >
              <span className="info-icon d-inline-flex align-items-center justify-content-center rounded-circle">
                i
              </span>
              اعرف المزيد
            </Link>
          </div>

          <div className="stats-section py-5">
            <div
              className="position-relative d-flex justify-content-center"
              style={{ zIndex: 2 }}
            >
              <div className="row g-4 justify-content-center px-3">
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center">
                    <i className="fa-solid fa-newspaper stat-icon"></i>
                    <h3 className="stat-number">50+</h3>
                    <div className="stat-label">مقالة</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card d-flex flex-column align-items-center text-center">
                    <i className="fa-solid fa-users stat-icon"></i>
                    <h3 className="stat-number">+10ألف</h3>
                    <div className="stat-label">قارئ</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center">
                    <i className="fa-solid fa-folder-open stat-icon"></i>
                    <h3 className="stat-number">4</h3>
                    <div className="stat-label">تصنيفات</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center">
                    <i className="fa-solid fa-pen-nib stat-icon"></i>
                    <h3 className="stat-number">6</h3>
                    <div className="stat-label">كاتب</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-posts">
        <span className="hero-glow-2"></span>
        <div className="featured-posts__wrap  container">
          <div dir="rtl" className="featured-hero  position-relative">
            <div className="d-flex  justify-content-between align-items-end">
              <div
                dir="rtl"
                className="d-flex flex-column  text-end position-relative featured-hero__wrapper"
              >
                <span className="featured-hero__badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-3">
                  <span className="featured-hero__dot featured-hero__dot--orange rounded-circle"></span>
                  <span className="featured-hero__dot featured-hero__dot--light rounded-circle"></span>
                  <span className="featured-hero__badge-text fw-bold">
                    مميز
                  </span>
                </span>

                <h2 className="featured-hero__title fw-bold text-white mb-2">
                  مقالات مختارة
                </h2>

                <p className="featured-hero__subtitle mb-0">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
              <div>
                <Link
                  to="/Blog"
                  className="featured-hero__cta"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  عرض الكل
                  <i className="fa-solid fa-angle-left fs-6"></i>
                </Link>
              </div>
            </div>
          </div>
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="featured-card">
              <div className="featured-card__image">
                <img
                  className="imj"
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
                {post.featured && (
                  <span className="featured-card__badge">
                    <FaStar />
                    مميز
                  </span>
                )}
              </div>

              <div className="featured-card__content">
                <div className="featured-card__meta">
                  <span className="featured-card__category">
                    {post.category}
                  </span>
                  <span className="featured-card__readtime">
                    <FaRegClock />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="featured-card__title">{post.title}</h2>
                <p className="featured-card__excerpt">{post.excerpt}</p>

                <div className="featured-card__footer">
                  <div className="featured-card__author">
                    <div className="featured-card__avatar-wrap">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="featured-card__avatar"
                      />
                      <span className="featured-card__online-dot"></span>
                    </div>
                    <div className="featured-card__author-info">
                      <span className="featured-card__author-name">
                        {post.author.name}
                      </span>
                      <span className="featured-card__author-date">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/Blog/${post.id}`}
                    className="featured-card__link"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    اقرأ المقال
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="text-center mb-4">
            <div className="categories-badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4">
              <div className="d-flex gap-1">
                <span className="categories-dot rounded-circle" />
                <span className="categories-dot-small rounded-circle" />
              </div>
              <span className="categories-badge-text">التصنيفات</span>
            </div>
            <h2 className="categories-title text-white mb-3">
              استكشف حسب الموضوع
            </h2>
            <p className="categories-subtitle mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="row g-4">
            {categories.map((item) => (
              <div className="col-6 col-md-3 mt-5" key={item.name}>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={`/blog?category=${encodeURIComponent(item.name)}`}
                  className="categories-card d-flex flex-column align-items-end justify-content-center text-decoration-none rounded-4 p-4 h-100"
                >
                  <div className="categories-icon-box d-flex align-items-center justify-content-center mb-3">
                    <i
                      className={`fa-solid ${categoryIcons[item.name] || "fa-camera"}`}
                    />
                  </div>
                  <h5 className="categories-card-title mb-1">{item.name}</h5>
                  <span className="categories-card-count">
                    {item.count} مقالة
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-posts">
        <span className="hero-glow"></span>
        <div className="latest-posts__wrap container">
          <div
            dir="lrt"
            className="latest-posts__header d-flex justify-content-between align-items-start align-items-md-end"
          >
            <div className="d-flex flex-column text-end">
              <span className="latest-posts__badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-3">
                <span className="latest-posts__dot rounded-circle"></span>
                <span className="latest-posts__badge-text fw-bold">الأحدث</span>
              </span>

              <h2 className="latest-posts__title fw-bold text-white mb-2">
                أحدث المقالات
              </h2>

              <p className="latest-posts__subtitle mb-0">
                محتوى جديد طازج من المطبعة
              </p>
            </div>

            <Link
              to="/Blog"
              className="latest-posts__cta"
              onClick={() => window.scrollTo(0, 0)}
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
          </div>

          <div className="row g-4">
            {latestPosts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <article className="latest-posts__card h-100">
                  <Link
                    to={`/blog/${post.id}`}
                    className="latest-posts__image"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="latest-posts__category">
                      {post.category}
                    </span>
                  </Link>

                  <div className="latest-posts__content">
                    <div dir="rtl" className="latest-posts__meta ">
                      <i className="fa-regular fa-clock"></i>
                      <span>{post.readTime}</span>
                      <i className="fa-solid fa-circle latest-posts__meta-dot"></i>
                      <span>{post.date}</span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="latest-posts__title-link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <h3 className="latest-posts__card-title">{post.title}</h3>
                    </Link>

                    <p className="latest-posts__excerpt">{post.excerpt}</p>

                    <div className="latest-posts__footer">
                      <div className="latest-posts__author">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="latest-posts__avatar"
                        />
                        <div className="latest-posts__author-info">
                          <span className="latest-posts__author-name">
                            {post.author.name}
                          </span>
                          {post.author.role && (
                            <span className="latest-posts__author-role">
                              {post.author.role}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="latest-posts__arrow-btn"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <i className="fa-solid fa-angle-left"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <span className="hero-glow"></span>
          <div className="newsletter-card text-center mx-auto">
            <div className="newsletter-icon d-inline-flex align-items-center justify-content-center rounded-4 mb-4">
              <FaEnvelope />
            </div>

            <h2 className="newsletter-title fw-bold mb-3">
              اشترك في <span className="accent">نشرتنا</span> الإخبارية
            </h2>

            <p className="newsletter-subtitle mx-auto mb-4">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <div className="newsletter-form d-flex flex-wrap justify-content-center gap-3 mb-4">
              <button
                type="button"
                className="btn-orange newsletter-btn"
                onClick={handleSubscribe}
              >
                اشترك الآن
              </button>
              <input
                type="email"
                dir="rtl"
                className="newsletter-input"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="newsletter-meta d-flex flex-wrap align-items-center justify-content-center gap-3">
              <span>إلغاء الاشتراك في أي وقت</span>
              <span className="newsletter-meta-sep">•</span>
              <span>بدون إزعاج</span>
              <span className="newsletter-meta-sep">•</span>
              <div className="d-flex align-items-center gap-2">
                <span>انضم لـ 10,000+ مصور</span>
                <div className="newsletter-avatars d-flex">
                  <img
                    src={posts[0]?.author?.avatar}
                    alt=""
                    className="newsletter-avatar"
                  />
                  <img
                    src={posts[1]?.author?.avatar}
                    alt=""
                    className="newsletter-avatar"
                  />
                  <img
                    src={posts[2]?.author?.avatar}
                    alt=""
                    className="newsletter-avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

