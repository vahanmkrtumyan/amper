import React from "react";
import HelpfulContactForm from "./helpful_contact_form";
import { useRouter } from "next/router";

const content = {
  en: {
    addressLabel: "Address",
    address: "2214 RA, Kotayk province, town Byureghavan, 49 Z. Andranik str",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    workingHoursText: "Our business hours are listed below",
    monFri: "Monday-Friday:",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
  },
  ru: {
    addressLabel: "Адрес",
    address: "2214 РА, Котайкский регион,г. Бюрегаван, ул. З. Андраника 49",
    phone: "Телефон",
    email: "Эл. адрес",
    workingHours: "Рабочие часы",
    workingHoursText: "Рабочие часы указаны ниже",
    monFri: "Понедельник Пятница:",
    saturday: "Суббота",
    sunday: "Воскресенье",
    closed: "Закрыто",
  },
  hy: {
    addressLabel: "Հասցե",
    address: "ՀՀ, Կոտայիք մարզ, Ք․ Բյուրեղավան, Զ․ Անդրանիկի 49, 2214",
    phone: "Հեռախոս",
    email: "Էլ․ հասցե",
    workingHours: "Աշխատանքային ժամեր",
    workingHoursText: "Մեր աշխատանքային ժամերը ներկայացված են ստորև",
    monFri: "Երկուշաբթի-ուրբաթ",
    saturday: "Շաբաթ",
    sunday: "Կիրակի",
    closed: "Փակ է",
  },
};

export default function Siderbar({ isTopbar, activeTopbar }) {
  const { locale } = useRouter();
  return (
    <>
      <div className={`glax_tm_widget_wrap ${isTopbar !== 0 ? "opened" : ""}`}>
        <div className="widget_inner_wrap">
          <div className="widget_icons_wrap">
            <ul>
              <li className="home" data-style="home">
                <a href="#" onClick={() => activeTopbar(1)}>
                  <img className="svg" src="img/svg/home.svg" alt="" />
                </a>
              </li>
              <li className="message" data-style="message">
                <a href="#" onClick={() => activeTopbar(2)}>
                  <img className="svg" src="img/svg/message2.svg" alt="" />
                </a>
              </li>
              <li className="phone" data-style="phone">
                <a href="#" onClick={() => activeTopbar(3)}>
                  <img className="svg" src="img/svg/old_phone.svg" alt="" />
                </a>
              </li>
              <li className="clock" data-style="clock">
                <a href="#" onClick={() => activeTopbar(4)}>
                  <img className="svg" src="img/svg/clock.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* WIDGET DROPDOWN */}
          <div className="widget_dropdown_wrap">
            <div
              className="drop_list home"
              style={
                isTopbar === 1 ? { display: "block" } : { display: "none" }
              }
            >
              <div className="adress_wrap">
                <div className="office_image">
                  <img src="img/contact/1.jpg" alt="" />
                </div>
                <div className="definitions_wrap">
                  <h3>{content[locale].addressLabel}</h3>
                  <p>{content[locale].address}</p>
                  <p>{content[locale].phone}: +374 77 905885</p>
                  <p>
                    <span>{content[locale].email}:</span>
                    <a href="#">contact@tga-amper.am</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="drop_list message"
              style={
                isTopbar === 2 ? { display: "block" } : { display: "none" }
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
                  {/* <form action="/" method="post">
                                        <div className="input_list_wrap">
                                            <ul>
                                                <li>
                                                    <input type="text" placeholder="Your Name" />
                                                </li>
                                                <li>
                                                    <input type="text" placeholder="E-mail Address" />
                                                </li>
                                                <li>
                                                    <input type="text" placeholder="Main Subject" />
                                                </li>
                                            </ul>
                                        </div>
                                        <textarea placeholder="Message" defaultValue={""} />
                                        <div className="button">
                                            <a href="#">Send Message</a>
                                        </div>
                                    </form> */}
                </div>
              </div>
            </div>
            <div
              className="drop_list phone"
              style={
                isTopbar === 3 ? { display: "block" } : { display: "none" }
              }
            >
              <div className="call_wrap">
                <div className="image">
                  <img src="img/estimate/call.png" alt="" />
                </div>
                <h3>{content[locale].phone}</h3>
                <p>
                  <a href="tel:37477905885">+374 77 905885</a>
                </p>
              </div>
            </div>
            <div
              className="drop_list clock"
              style={
                isTopbar === 4 ? { display: "block" } : { display: "none" }
              }
            >
              <div className="working_hours_wrap_short">
                <h3>{content[locale].workingHours}</h3>
                <p className="subtitle">{content[locale].workingHoursText}</p>
                <div className="hour_list">
                  <ul>
                    <li>
                      <span className="left">{content[locale].monFri}</span>
                      <span className="right">10:00 - 19:00</span>
                    </li>
                    <li>
                      <span className="left">{content[locale].saturday}:</span>
                      <span className="right">{content[locale].closed}</span>
                    </li>
                    <li>
                      <span className="left">{content[locale].sunday}:</span>
                      <span className="right">{content[locale].closed}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /WIDGET DROPDOWN */}
        </div>
      </div>
      <div
        className={`glax_tm_widget_window_overlay ${
          isTopbar !== 0 ? "opened" : ""
        }`}
        onClick={() => activeTopbar(0)}
      />
    </>
  );
}
