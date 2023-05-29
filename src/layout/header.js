import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const content = {
  en: {
    home: "Home",
    clients: "Clients",
    about: "About us",
    products: "Our products",
    certificates: "Certificates",
  },
  hy: {
    home: "Գլխավոր",
    clients: "Մեր հաճախորդները",
    about: "Մեր մասին",
    products: "Արտադրանք",
    certificates: "Սերտիֆիկատներ",
  },
  ru: {
    home: "Главное",
    clients: "Наши клиенты",
    about: "О нас",
    products: "Продукция",
    certificates: "Сертификаты",
  },
};

export default function Header({ style }) {
  const { locale, push } = useRouter();
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
                    <Image
                      src="/img/desktop-logo.png"
                      width={500}
                      height={200}
                      alt=""
                    />
                    <Link href="/">
                      <a className="full_link" />
                    </Link>
                  </div>
                </li>
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
          </div>
        </div>
      </div>
      {/* /HEADER */}
    </>
  );
}
