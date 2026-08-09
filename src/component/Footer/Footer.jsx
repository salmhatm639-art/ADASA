import { useState } from "react";
import "./Footer.css";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import data from "../../../posts.json.json"; // عدّل المسار لو مختلف عندك

export default function Footer() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // نفس التصنيفات الحقيقية المستخدمة في صفحة المدونة
  const footerCategories = data.categories.map((item) => item.name);

  const handleCategoryClick = (item) => {
    // بيشتغل من أي صفحة: بيروح لصفحة المدونة ومعاه التصنيف في الـ URL
    navigate(`/Blog?category=${encodeURIComponent(item)}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer ">
      <div className="footer__wrap container">
        <div className="footer__grid row">
          <div >
            <div className="footer__logo-row ">
              <div className="footer__logo-badge">ع</div>
              <span className="footer__logo-name">عدسة</span>
            </div>
            <p className="footer__desc">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="footer__socials">
              <a
                className="footer__social-btn"
                href="https://www.youtube.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                className="footer__social-btn"
                href="https://www.linkedin.com/in/adasah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="footer__social-btn"
                href="https://github.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="footer__social-btn"
                href="https://twitter.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="">
            <div className="footer__title">استكشف</div>
            <div className="d-flex flex-column">
              <Link
                to="/Home"
                className="pb-1 link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FaAngleLeft className="icon" />
                الرئيسية
              </Link>
              <Link
                to="/Blog"
                className="pb-1 link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FaAngleLeft className="icon" />
                المدونة
              </Link>
              <Link
                to="/About"
                className="pb-1 link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FaAngleLeft className="icon" />
                من نحن
              </Link>
            </div>
          </div>

          <div className="">
            <div className="footer__title">التصنيفات</div>
            <div className="flex-column ">
              {footerCategories.map((item) => (
                <button
                  key={item}
                  onClick={() => handleCategoryClick(item)}
                  className="pb-1 link btn btn-link text-start p-0 border-0 bg-transparent"
                >
                  <FaAngleLeft className="icon" />
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <div className="footer__title">ابقى على اطلاع</div>
            <p className="footer__desc">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <input
              type="email"
              className="footer__input"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="footer__subscribe-btn rounded-5">اشترك</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom-wrap pb-3 pt-3">
        <div className="footer__bottom">
          <div className="footer__copy">
            <span>© 2026 عدسة. صنع بكل</span>
            <span className="footer__heart">
              <i class="fa-solid fa-heart"></i>
            </span>
            <span>جميع الحقوق محفوظة</span>
          </div>
          <div className="footer__bottom-links">
            <a className="footer__bottom-link">سياسة الخصوصية</a>
            <a className="footer__bottom-link">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
