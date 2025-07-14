import React from "react";
import "./Header.css";
import link from "/img/Link.png";
import seach from "/img/search.png";
export default function Header() {
  return (
    <div className="header">
      <img src={link} alt="link" className="header-link" />
			<div className="header-search">
				<img src={seach} alt="" />
				<input type="text" placeholder="Search usernames" className="header-search-input" />
			</div>
    </div>
  );
}
