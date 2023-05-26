import React from "react";
import HelpfulContactForm from "./helpful_contact_form";
import { useRouter } from "next/router";

const content = {
  en: {
    address: "2214 RA, Kotayk province, town Byureghavan, 49 Z. Andranik str",
  },
  ru: {
    address: "2214 РА, Котайкский регион,г. Бюрегаван, ул. З. Андраника 49",
  },
  hy: { address: "ՀՀ, Կոտայիք մարզ, Ք․ Բյուրեղավան, Զ․ Անդրանիկի 49, 2214" },
};

export default function Siderbar({ isTopbar, activeTopbar }) {
  const { locale, locales, defaultLocale } = useRouter();
  console.log({ locale, locales });
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
                  <h3>Head Office in New-York</h3>
                  <p>{content[locale].address}</p>
                  <p>Phone: +1 202-415-7234</p>
                  <p>
                    <span>Email:</span>
                    <a href="#">w.constructify@gmail.com</a>
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
                <h3>Toll Free</h3>
                <p>
                  <a href="tel:18009876543">1-800-987-6543</a>
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
                <h3>Working Hours</h3>
                <p className="subtitle">
                  We are happy to meet you during our working hours. Please make
                  an appointment.
                </p>
                <div className="hour_list">
                  <ul>
                    <li>
                      <span className="left">Monday-Friday:</span>
                      <span className="right">10:00 - 19:00</span>
                    </li>
                    <li>
                      <span className="left">Saturday:</span>
                      <span className="right">Closed</span>
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
