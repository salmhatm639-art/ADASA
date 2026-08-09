// import React from "react";
// import "./About.css";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { HiOutlineMail } from "react-icons/hi";
// import data from "../../../posts.json.json";
// import { Link } from "react-router-dom";

// export default function About() {
//   const uniqueAuthors = Array.from(
//     new Map(data.posts.map((post) => [post.author.name, post.author])).values(),
//   );

//   return (
//     <>
//       <section className="sec-container position-relative overflow-hidden d-flex align-items-center justify-content-center w-100">
//         <div className="hero-grid" />

//         <div className="hero-glow" />
//         <div className="hero-glow-2" />
//         <div className="position-relative text-center px-4 py-5">
//           <div className="hero-badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4">
//             <div className="d-flex gap-1">
//               <span className="dot rounded-circle" />
//               <span className="dot rounded-circle" />
//             </div>
//             <span className="badge-text">مرحباً بك في عدسة</span>
//           </div>
//           <h1 className="hero-title text-white mb-5">
//             اكتشف <span className="accent">فن</span>
//             <br />
//             التصوير الفوتوغرافي
//           </h1>

//           <p className="hero-subtitle text-secondary fw-normal mx-auto mb-5">
//             انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
//           </p>

//           <div className="stats-section w-100 py-5">
//             <div
//               className="position-relative d-flex justify-content-center px-4"
//               style={{ zIndex: 2 }}
//             >
//               <div className="row g-4 justify-content-center w-100">
//                 <div className="col-6 col-md-3">
//                   <div className="stat-card text-center">
//                     <i className="fa-solid fa-newspaper stat-icon"></i>
//                     <h3 className="stat-number">+500</h3>
//                     <div className="stat-label">مقالة منشورة</div>
//                   </div>
//                 </div>

//                 <div className="col-6 col-md-3">
//                   <div className="stat-card d-flex flex-column align-items-center text-center">
//                     <i className="fa-solid fa-users stat-icon"></i>
//                     <h3 className="stat-number">+2مليون</h3>
//                     <div className="stat-label">قارئ شهرياً</div>
//                   </div>
//                 </div>

//                 <div className="col-6 col-md-3">
//                   <div className="stat-card text-center">
//                     <i className="fa-solid fa-folder-open stat-icon"></i>
//                     <h3 className="stat-number">+15</h3>
//                     <div className="stat-label">تصنيف</div>
//                   </div>
//                 </div>

//                 <div className="col-6 col-md-3">
//                   <div className="stat-card text-center">
//                     <i className="fa-solid fa-pen-nib stat-icon"></i>
//                     <h3 className="stat-number">+50</h3>
//                     <div className="stat-label">كاتب خبير</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="our-values-section">
//         <div className="container">
//           <div className="values-header text-center">
//             <h2 className="values-title">
//               <span className="title-bar"></span> قيمنا{" "}
//               <span className="title-bar"></span>
//             </h2>
//             <p className="values-subtitle">
//               المبادئ التي توجه كل ما نقوم بإنشائه
//             </p>
//           </div>

//           <div className="row g-4">
//             <div className="col-12 col-md-3">
//               <div className="value-card">
//                 <h1 className="value-icon">
//                   <i className="fa-solid fa-arrows-rotate"></i>
//                 </h1>
//                 <h3 className="value-title">دائماً محدث</h3>
//                 <p className="value-desc">أحدث الاتجاهات وأفضل الممارسات</p>
//               </div>
//             </div>

//             <div className="col-12 col-md-3">
//               <div className="value-card">
//                 <h1 className="value-icon">
//                   <i className="fa-solid fa-handshake"></i>
//                 </h1>
//                 <h3 className="value-title">المجتمع</h3>
//                 <p className="value-desc">تعلم مع آلاف المصورين</p>
//               </div>
//             </div>

//             <div className="col-12 col-md-3">
//               <div className="value-card">
//                 <h1 className="value-icon">
//                   <i className="fa-solid fa-bolt"></i>
//                 </h1>
//                 <h3 className="value-title">تركيز عملي</h3>
//                 <p className="value-desc">أمثلة واقعية يمكنك تطبيقها اليوم</p>
//               </div>
//             </div>

//             <div className="col-12 col-md-3">
//               <div className="value-card">
//                 <h1 className="value-icon ">
//                   <i className="fa-solid fa-bullseye"></i>
//                 </h1>
//                 <h3 className="value-title">الجودة أولاً</h3>
//                 <p className="value-desc">محتوى مدروس ومكتوب بخبرة</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="team-section">
//         <div className="container">
//           <div className="text-center mb-5">
//             <span className="team-badge">
//               <span className="team-badge-dot"></span>
//               فريقنا
//             </span>
//             <h2 className="team-title">تعرف على كتابنا</h2>
//             <p className="team-subtitle">
//               فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
//               المجتمع.
//             </p>
//           </div>

//           <div className="row g-4">
//             {uniqueAuthors.map((author, index) => (
//               <div className="col-12 col-md-6 col-lg-4" key={index}>
//                 <div className="team-card">
//                   <div dir="rtl" className="team-avatar-wrapper">
//                     <img
//                       src={author.avatar}
//                       alt={author.name}
//                       className="team-avatar"
//                     />
//                     <span className="team-verified-badge">
//                       <i class="fa-solid fa-check"></i>
//                     </span>
//                   </div>
//                   <h3 className="team-name">{author.name}</h3>
//                   <p className="team-role">{author.role}</p>
//                   <div className="team-socials">
//                     <a href="#" className="team-social-icon team-social-icon-X" aria-label="X">
//                       <i class="fa-brands fa-x-twitter"></i>
//                     </a>
//                     <a
//                       href="#"
//                       className="team-social-icon team-social-icon-G"
//                       aria-label="GitHub"
//                     >
//                       <i class="fa-brands fa-github"></i>
//                     </a>
//                     <a
//                       href="#"
//                       className="team-social-icon team-social-icon-L"
//                       aria-label="LinkedIn"
//                     >
//                       <i class="fa-brands fa-linkedin"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="cta-section">
//         <div className="container text-center py-5">
//           <h2 className="cta-title mb-3">لديك أسئلة؟ دعنا نتحدث!</h2>

//           <p className="cta-text mb-4 mx-auto">
//             نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
//             أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
//           </p>

//           <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
//             <a className="btn cta-btn-dark d-flex align-items-center gap-2">
//               تواصل معنا
//               <i class="fa-regular fa-envelope"></i>
//             </a>
//             <Link
//               to={`/Blog`}
//               className="cta-btn-outline"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               تصفح المقالات
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import "./About.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import data from "../../../posts.json.json";
import { Link } from "react-router-dom";

export default function About() {
  const uniqueAuthors = Array.from(
    new Map(data.posts.map((post) => [post.author.name, post.author])).values(),
  );

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

          <div className="stats-section  py-5">
            <div className="position-relative d-flex justify-content-center px-4" style={{ zIndex: 2 }}>
              <div className="row g-4 justify-content-center px-3">
                <div className="col-6 col-md-3">
                  <div className="stat-card text-center">
                    <i className="fa-solid fa-newspaper stat-icon"></i>
                    <h3 className="stat-number">+500</h3>
                    <div className="stat-label">مقالة </div>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="stat-card d-flex flex-column align-items-center text-center">
                    <i className="fa-solid fa-users stat-icon"></i>
                    <h3 className="stat-number">+2مليون</h3>
                    <div className="stat-label">قارئ شهرياً</div>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="stat-card text-center">
                    <i className="fa-solid fa-folder-open stat-icon"></i>
                    <h3 className="stat-number">+15</h3>
                    <div className="stat-label">تصنيف</div>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="stat-card text-center">
                    <i className="fa-solid fa-pen-nib stat-icon"></i>
                    <h3 className="stat-number">+50</h3>
                    <div className="stat-label">كاتب خبير</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-values-section">
        <div className="container">
          <div className="values-header text-center">
            <h2 className="values-title">
              <span className="title-bar"></span> قيمنا{" "}
              <span className="title-bar"></span>
            </h2>
            <p className="values-subtitle">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="row g-4 p-0 px-lg-5">
            <div className="col-12 col-md-3">
              <div className="value-card">
                <h1 className="value-icon">
                  <i className="fa-solid fa-arrows-rotate"></i>
                </h1>
                <h3 className="value-title">دائماً محدث</h3>
                <p className="value-desc">أحدث الاتجاهات وأفضل الممارسات</p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="value-card">
                <h1 className="value-icon">
                  <i className="fa-solid fa-handshake"></i>
                </h1>
                <h3 className="value-title">المجتمع</h3>
                <p className="value-desc">تعلم مع آلاف المصورين</p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="value-card">
                <h1 className="value-icon">
                  <i className="fa-solid fa-bolt"></i>
                </h1>
                <h3 className="value-title">تركيز عملي</h3>
                <p className="value-desc">أمثلة واقعية يمكنك تطبيقها اليوم</p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="value-card">
                <h1 className="value-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </h1>
                <h3 className="value-title">الجودة أولاً</h3>
                <p className="value-desc">محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="team-badge">
              <span className="team-badge-dot"></span>
              فريقنا
            </span>
            <h2 className="team-title">تعرف على كتابنا</h2>
            <p className="team-subtitle">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>

          <div className="row g-4 p-0 px-lg-5">
            {uniqueAuthors.map((author, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="team-card">
                  <div dir="rtl" className="team-avatar-wrapper">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="team-avatar"
                    />
                    <span className="team-verified-badge">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>
                  <h3 className="team-name">{author.name}</h3>
                  <p className="team-role">{author.role}</p>
                  <div className="team-socials">
                    <a href="#" className="team-social-icon team-social-icon-X" aria-label="X">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#" className="team-social-icon team-social-icon-G" aria-label="GitHub">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" className="team-social-icon team-social-icon-L" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center py-5">
          <h2 className="cta-title mb-3">لديك أسئلة؟ دعنا نتحدث!</h2>

          <p className="cta-text mb-4 mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <a className="btn cta-btn-dark d-flex align-items-center gap-2">
              تواصل معنا
              <i className="fa-regular fa-envelope"></i>
            </a>
            <Link
              to={`/Blog`}
              className="cta-btn-outline"
              onClick={() => window.scrollTo(0, 0)}
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
