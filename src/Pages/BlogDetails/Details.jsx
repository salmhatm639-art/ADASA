

import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import data from "../../../posts.json.json";
import "./Details.css";

const renderSection = (section, index) => {
  const trimmed = section.trim();

  if (trimmed.startsWith("## ")) {
    return (
      <h3 key={index} id={`section-${index}`} className="sectionSubtitle">
        <i className="fa-solid fa-camera"></i>
        {trimmed.replace("## ", "")}
      </h3>
    );
  }

  if (trimmed.startsWith("> ")) {
    return (
      <blockquote key={index} className="sectionQuote">
        {trimmed.replace("> ", "")}
      </blockquote>
    );
  }

  if (index === 0) {
    return (
      <p key={index} className="sectionFirst">
        {trimmed}
      </p>
    );
  }

  return (
    <p key={index} className="sectionParagraph">
      {trimmed}
    </p>
  );
};

const getTocItems = (sections) => {
  return sections
    .map((section, index) => ({ text: section.trim(), index }))
    .filter((item) => item.text.startsWith("## "))
    .map((item) => ({
      id: `section-${item.index}`,
      title: item.text.replace("## ", ""),
    }));
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const navbar =
    document.querySelector("nav") || document.querySelector(".navbar");
  const extraSpacing = 20;
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  const offset = navbarHeight + extraSpacing;

  const elementTop = el.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementTop - offset,
    behavior: "smooth",
  });
};

export default function Details() {
  const { posts } = data;
  const { id } = useParams();
  const navigate = useNavigate();

  const myPost = posts.find((item) => item.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!myPost) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h3>البوست غير موجود</h3>
      </div>
    );
  }

  const sections = myPost.content.split("\n\n");
  const tags = myPost.tags || [];
  const tocItems = getTocItems(sections);
  const badgeText = myPost.category || tags[0] || "بورتريه";
  const formattedDate = new Date(myPost.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const relatedPosts = posts
    .filter((p) => p.id !== myPost.id)
    .sort((a, b) => {
      const aSame = a.category === myPost.category ? 0 : 1;
      const bSame = b.category === myPost.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, 3);

  return (
    <>
      <section className="section-one position-relative">
        <div className="heroWrapper">
          <img src={myPost.image} alt={myPost.title} className="heroImage" />
        </div>

        <div className="container overlay position-absolute d-flex flex-column justify-content-between align-items-end text-end text-white">
          <div className="heroChangePage">
            <Link to="../Blog">المدونة</Link>
            <i className="fa-solid fa-angle-left"></i>
            <span href="" className="taba">
              {badgeText}
            </span>
            <i className="fa-solid fa-angle-left"></i>
            <Link to="../Home">
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
          <div className="heroMeta d-flex align-items-center gap-3">
            <span className="heroBadge">{badgeText}</span>
            <span className="metaItem">
              <i className="fa-regular fa-clock"></i>
              {myPost.readTime}
            </span>
            <span className="metaItem">
              <i className="fa-regular fa-calendar"></i>
              {formattedDate}
            </span>
          </div>

          <h1 className="heroTitle">{myPost.title}</h1>

          <div className="heroContent d-flex justify-content-between align-items-center gap-3">
            <div>
              <img
                src={myPost.author.avatar}
                alt={myPost.author.name}
                className="authorImage"
              />
            </div>

            <div>
              <h6 className="authorName">{myPost.author.name}</h6>
              <span className="date">{myPost.author.role}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tow">
        <div className="container pt-5">
          <div className="row parent gx-5">
            {/* Right Side */}
            <div className="divsRight col-12 col-lg-9 d-flex flex-column gap-4">
              <div className="div1">
                <h5>{myPost.excerpt}</h5>
              </div>

              <div className="div2">
                {sections.map((section, index) =>
                  renderSection(section, index),
                )}
              </div>

              {/* Tags */}
              <div className="div3 tagsCard">
                <div className="tagsHeader">
                  <span className="tagsTitle">الوسوم</span>

                  <div className="tagsIconBadge">
                    <i className="fa-solid fa-tags"></i>
                  </div>
                </div>

                <div className="tagsList">
                  {tags.map((tag, index) => (
                    <span className="tagPill" key={index}>
                      {tag} #
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="div4 tagsCard d-flex justify-content-between align-items-center">
                <div className="tagsList">
                  <i className="fa-solid fa-link link"></i>
                  <i className="fa-brands fa-whatsapp whatsapp"></i>
                  <i className="fa-brands fa-linkedin-in linkedin-in"></i>
                  <i className="fa-brands fa-x-twitter twitter"></i>
                </div>

                <div className="tagsHeader">
                  <span className="tagsTitle">شارك المقال</span>

                  <div className="tagsIconBadge">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="div5 tagCard d-flex align-items-center mb-4 mb-lg-0 gap-3">
                <div>
                  <img src={myPost.author.avatar} alt={myPost.author.name} />
                </div>

                <div>
                  <div>
                    <span className="typing-art">كاتب المقال</span>
                    <h4 className="m-1 fw-bold">{myPost.author.name}</h4>
                    <p>{myPost.author.role}</p>
                  </div>
                  <span>
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                    الفوتوغرافي.
                  </span>
                </div>
              </div>
            </div>
            {/* Left Side */}
            <div className="divsLeft col-12 col-lg-3 d-flex flex-column gap-4">
              <div className="div6 card-sid-1 d-flex flex-column gap-2">
                <div className="d-flex justify-content-start align-items-center flex-row gap-2">
                  <i className="fa-solid fa-list"></i>
                  <h4>محتويات المقال</h4>
                </div>

                <div className="tocList list-unstyled m-0 p-0">
                  {tocItems.map((item, index) => (
                    <h5 key={item.id} className="tocItem toc-item">
                      <button
                        type="button"
                        className="tocLink"
                        onClick={() => scrollToSection(item.id)}
                      >
                        <span className="toc-number">{index + 1}</span>
                        {item.title}
                      </button>
                    </h5>
                  ))}
                </div>
              </div>

              <div className="div7 card-sid-2">
                <div className="infoBox">
                  <div className="infoIconWrap">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="">
                    <div className="infoValue">{myPost.readTime}</div>
                    <div className="infoLabel">وقت القراءة</div>
                  </div>
                </div>
                <div className="infoBox">
                  <div className="infoIconWrap">
                    <i className="fa-regular fa-calendar"></i>
                  </div>
                  <div className="">
                    <div className="infoValue">{formattedDate}</div>
                    <div className="infoLabel">تاريخ النشر</div>
                  </div>
                </div>
              </div>

              <div className="div8 card-sid-3">
                <div className="subscribeIconWrap">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h4 className="subscribeTitle">لا تفوّت جديدنا</h4>
                <p className="subscribeText">اشترك للحصول على أحدث المقالات</p>
                <button
                  type="button"
                  className="subscribeBtn"
                  onClick={() => {
                    navigate("/blog");
                    window.scrollTo(0, 0);
                  }}
                >
                  تصفح المزيد
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="parent container">
          <div className="top-sec3 d-flex px-3 justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-images images ms-3"></i>
              <div>
                <h4 className="m-0">مقالات قد تعجبك</h4>
                <span className="span-top m-0 fs-6">استكشف المزيد من المحتوى المميز</span>
              </div>
            </div>
            <div>
              <Link to="../Blog" className=" d-none d-lg-block read-more" onClick={() => window.scrollTo(0, 0)}>
              اقرأ المقال
              <i className="fa-solid fa-arrow-left-long p-2"></i>
              </Link>
            </div>
          </div>

          <div className="bottom-sec3 gap-5 px-3">
            {relatedPosts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="relatedCard"
              >
                <div className="relatedImageWrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="relatedImage"
                  />
                  <span className="relatedBadge">{post.category}</span>
                </div>

                <div className="relatedBody">
                  <h5 className="relatedTitle">{post.title}</h5>

                  <div className="relatedMeta">
                    <span className="relatedReadTime">
                      {post.readTime}
                    </span>

                    <div className="relatedAuthor">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="relatedAuthorAvatar"
                      />
                      <span className="relatedAuthorName">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
