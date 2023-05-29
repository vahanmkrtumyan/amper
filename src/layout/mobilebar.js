import React, { useState } from "react";
import Link from "next/link";
import HelpfulContactForm from "../components/helpful_contact_form";
import { useRouter } from "next/router";

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

export default function MobileBar() {
  const { locale, push, pathname } = useRouter();
  const [isMobileTopbar, setMobileTopbar] = useState(0);
  const activeMobileTopbar = (index) => {
    setMobileTopbar(index);
  };

  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  // useEffect(() => {
  // 	new MetisMenu("#metismenu");
  // }, []);
  return (
    <>
      <div className="glax_tm_mobile_bar_wrap">
        <div className="mobile_topbar_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="short_info_wrap">
                <ul>
                  <li data-type="home">
                    <Link href="#">
                      <a onClick={() => activeMobileTopbar(1)}>
                        <img className="svg" src="/img/svg/home.svg" alt="" />
                      </a>
                    </Link>
                  </li>
                  <li data-type="message">
                    <Link href="#">
                      <a onClick={() => activeMobileTopbar(2)}>
                        <img
                          className="svg"
                          src="/img/svg/message2.svg"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li data-type="phone">
                    <Link href="#">
                      <a onClick={() => activeMobileTopbar(3)}>
                        <img
                          className="svg"
                          src="/img/svg/old-phone.svg"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li data-type="clock">
                    <Link href="#">
                      <a onClick={() => activeMobileTopbar(4)}>
                        <img className="svg" src="/img/svg/clock.svg" alt="" />
                      </a>
                    </Link>
                  </li>
                  <li data-type="clock">
                    <Link href="#">
                      <a
                        onClick={() => activeMobileTopbar(0)}
                        style={
                          isMobileTopbar !== 0
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        x
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_header_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="logo_wrap">
                <Link href="/">
                  <a>
                    <img
                      style={{ maxWidth: "300px" }}
                      src="img/desktop-logo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="trigger_wrap">
                <div
                  className={`hamburger hamburger--collapse-r ${
                    isMobileMenu ? "is-active" : ""
                  }`}
                >
                  <div className="hamburger-box">
                    <div
                      onClick={MobileMenuTrueFalse}
                      className="hamburger-inner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MENU LIST */}
        <div
          className={`menu_list_wrap ${isMobileMenu ? "open" : "close"}`}
          style={isMobileMenu ? { display: "block" } : { display: "none" }}
        >
          <ul className="nav">
            <li>
              <Link href="/">
                <a>{content[locale].home}</a>
              </Link>
            </li>
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
        {/* /MENU LIST */}
        {/* DROPDOWN */}
        <div className="glax_tm_dropdown_wrap">
          <div className="container">
            <div
              className="drop_list home"
              style={
                isMobileTopbar === 1
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <div className="adress_wrap">
                <div className="office_image">
                  <img src="img/contact/1.jpg" alt="" />
                </div>
                <div className="definitions_wrap">
                  <h3>Head Office in New-York</h3>
                  <p>775 New York Ave, Brooklyn, NY 11203</p>
                  <p>Phone: +1 202-415-7234</p>
                  <p>
                    <span>Email:</span>
                    <Link href="#">
                      <a>w.constructify@gmail.com</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="drop_list message"
              style={
                isMobileTopbar === 2
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <div className="short_contact">
                <h3 className="title">Request a Quote</h3>
                <p className="subtitle">
                  Looking for a quality and affordable builder for your next
                  project?
                </p>
                <div className="inputs_wrap">
                  <HelpfulContactForm />
                </div>
              </div>
            </div>
            <div
              className="drop_list phone"
              style={
                isMobileTopbar === 3
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <div className="call_wrap">
                <div className="image">
                  <img src="img/estimate/call.png" alt="" />
                </div>
                <h3>Toll Free</h3>
                <p>
                  {" "}
                  <a href="tel:18009876543">1-800-987-6543</a>
                </p>
              </div>
            </div>
            <div
              className="drop_list clock"
              style={
                isMobileTopbar === 4
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <div className="working_hours_wrap_short">
                <h3>Working Hours</h3>
                <p className="subtitle">
                  We are happy to meet you during our working hours. Please make
                  an appointment.
                </p>
                <div className="hour_list">
                  <ul>
                    <li>
                      <span className="left">Monday-Friday:</span>
                      <span className="right">9am to 5pm</span>
                    </li>
                    <li>
                      <span className="left">Saturday:</span>
                      <span className="right">10am to 3pm</span>
                    </li>
                    <li>
                      <span className="left">Sunday:</span>
                      <span className="right">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /DROPDOWN */}
      </div>
    </>
  );
}
