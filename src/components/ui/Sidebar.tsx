import React from "react";
// import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <aside className="main-navigation">
        <ul className="top-block">
          <li>
            <a
              href="#"
              className='menu-link active'
            >
              <span className="link-name">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`menu-link`}
            >
              <span className="link-name">Inner</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
