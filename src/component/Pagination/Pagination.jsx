// import React from "react";
// import styles from "./Pagination.module.css";
// export default function Pagination({
//   numberOfpages,
//   handlePageChange,
//   currentPage,
// }) {
//   return (
//     <ul className="d-flex gap-2 justify-content-center align-items-center list-unstyled mt-5 mb-5 pb-5">
//       <i className={`fa-solid fa-angle-right ${styles.btnGhost} d-flex justify-content-center align-items-center rounded-3`}></i>
//       {Array.from({ length: numberOfpages }, (_, i) => (
//         <li
//           onClick={() => handlePageChange(i + 1)}
//           className={`${currentPage == i + 1 ? styles.active : ""} rounded-3 cursor-pointer `}
//           key={i}
//         >
//           {i + 1}
//         </li>
//       ))}
//       <i className={`fa-solid fa-angle-left ${styles.btnGhost} d-flex justify-content-center align-items-center rounded-3`}></i>
//     </ul>
//   );
// }


import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  numberOfpages,
  handlePageChange,
  currentPage,
}) {
  return (
    <ul  className="d-flex gap-2 justify-content-center align-items-center list-unstyled mt-5 pb-3">
      <i
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        className={`fa-solid fa-angle-right ${styles.btnGhost} d-flex justify-content-center align-items-center rounded-3`}
      ></i>

      {Array.from({ length: numberOfpages }, (_, i) => (
        <li
          onClick={() => handlePageChange(i + 1)}
          className={`${currentPage == i + 1 ? styles.active : ""} rounded-3 cursor-pointer`}
          key={i}
        >
          {i + 1}
        </li>
      ))}

      <i
        onClick={() => currentPage < numberOfpages && handlePageChange(currentPage + 1)}
        className={`fa-solid fa-angle-left ${styles.btnGhost} d-flex justify-content-center align-items-center rounded-3`}
      ></i>
    </ul>
  );
}
