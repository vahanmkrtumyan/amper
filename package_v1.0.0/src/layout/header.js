import React from "react";
import Link from "next/link";

export default function Header({ style }) {
  return (
    <>
      {/* HEADER */}
      <div
        className="glax_tm_header_wrap"
        data-style={style ? style : ""}
        data-position={style == "transparrent" ? "absolute" : "relative"}
      >
        <div className="container">
          <div className="header_inner_wrap">
            <div className="menu_wrap">
              <ul>
                <li>
                  <div className="logo_wrap">
                    <img src="img/desktop-logo.png" alt="" />
                    <a className="full_link" href="/" />
                  </div>
                </li>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="shape">
                  <Link href="/project">
                    <a>Projects</a>
                  </Link>
                  <div className="submenu_wrap">
                    <ul>
                      <li>
                        <Link href="/project">
                          <a>Project</a>
                        </Link>
                      </li>
                      <li>
                        <a href="/project-single">Project Single</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="shape">
                  <a href="/service">Services</a>
                  <div className="submenu_wrap">
                    <ul>
                      <li>
                        <a href="/service">Service</a>
                      </li>
                      <li>
                        <a href="/service-single">Service Single</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="shape">
                  <a href="/blog">News</a>
                  <div className="submenu_wrap">
                    <ul>
                      <li>
                        <a href="/blog">News</a>
                      </li>
                      <li>
                        <a href="/blog-single">News Single</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="purchase_button">
              <a href="https://themeforest.net/user/trendycoder/portfolio">
                Purchase now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /HEADER */}
    </>
  );
}
