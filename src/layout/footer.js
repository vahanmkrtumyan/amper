import Link from "next/link";
import React from "react";
import { Parallax } from "react-parallax";
import { useRouter } from "next/router";

// import image5 from './img/slider/5.jpg'

const content = {
  en: {
    mondayFriday: "Monday-Friday",
    hours: "10am to 7pm",
    weekEnd: "Saturday-Sunday",
    closed: "Closed",
    home: "Home",
    clients: "Clients",
    about: "About us",
    products: "Our products",
    certificates: "Certificates",
    workingHours: "Working Hours",
    links: "Helpful Links",
  },
  hy: {
    mondayFriday: "Երկուշաբթի-ուրբաթ",
    hours: "10:00-19:00",
    weekEnd: "Շաբաթ-կիրակի",
    closed: "Փակ է",
    home: "Գլխավոր",
    clients: "Մեր հաճախորդները",
    about: "Մեր մասին",
    products: "Արտադրանք",
    certificates: "Սերտիֆիկատներ",
    workingHours: "Աշխատանքային ժամեր",
    links: "Օգտակար հղումներ",
  },
  ru: {
    mondayFriday: "Понедельник-Пятница",
    hours: "10:00-19:00",
    weekEnd: "Суббота-Воскресенье",
    closed: "Закрыто",
    home: "Главное",
    clients: "Наши клиенты",
    about: "О нас",
    products: "Продукция",
    workingHours: "Рабочие часы",
    links: "Полезные ссылки",
    certificates: "Сертификаты",
  },
};

export default function Footer() {
  const { locale, push, pathname } = useRouter();

  return (
    <>
      <footer className="glax_tm_footer_wrap">
        <Parallax
          className="glax_tm_universal_parallax_wrap"
          // bgImage="img/slider/5.jpg"
          strength={300}
        >
          <div className="main_content footer">
            <div className="glax_tm_subscribe_wrap"></div>
            <div className="glax_tm_footer_wrap">
              <div className="container">
                <div
                  className="glax_tm_list_wrap footer"
                  data-column={2}
                  data-space={40}
                >
                  <ul className="glax_list">
                    <li>
                      <div className="inner">
                        <div className="footer_section_title">
                          <h3>{content[locale].workingHours}</h3>
                        </div>
                        <div className="inner_list">
                          <ul>
                            <li>
                              <div className="wrap">
                                <span className="left">
                                  {content[locale].mondayFriday}:
                                </span>
                                <span className="right">
                                  {content[locale].hours}
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="wrap">
                                <span className="left">
                                  {content[locale].weekEnd}:
                                </span>
                                <span className="right">
                                  {content[locale].closed}
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="footer_section_title">
                          <h3>{content[locale].links}</h3>
                        </div>
                        <div className="helpful_links">
                          <div className="inner_list">
                            <ul>
                              <li>
                                <a
                                  onClick={() => {
                                    push({
                                      pathname: "/",
                                      hash: "clients",
                                    });
                                  }}
                                >
                                  {content[locale].clients}
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() => {
                                    push({
                                      pathname: "/",
                                      hash: "certificates",
                                    });
                                  }}
                                >
                                  {content[locale].certificates}
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() => {
                                    push({
                                      pathname: "/",
                                      hash: "about",
                                    });
                                  }}
                                >
                                  {content[locale].about}
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() => {
                                    push({
                                      pathname: "/",
                                      hash: "products",
                                    });
                                  }}
                                >
                                  {content[locale].products}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="bottom_wrap">
          <div className="container">
            <div className="links_wrap"></div>
            <div className="copyright">
              <p>
                © 2023{" "}
                <Link href="#">
                  <a className="constructify">Amper, LCC</a>
                </Link>
                . All rights reserved.{" "}
              </p>
              <Link href="#">
                <a className="glax_tm_totop">
                  <span className="shape" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
