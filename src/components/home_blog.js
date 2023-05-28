import { useRouter } from "next/router";
import Link from "next/link";

const content = {
  en: { title: "Our products" },
  ru: { title: "Наши продукты" },
  hy: { title: "Մեր արտադրանքը" },
};

export default function HomeBlog() {
  const { locale } = useRouter();

  return (
    <>
      <div className="glax_tm_section">
        <div className="glax_tm_home_blog_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="blog_title_holder">
                <h3>{content[locale].title}</h3>
              </div>
              <div className="experience_list">
                <ul>
                  <li
                    style={{
                      position: "relative",
                      listStyle: "none",
                      paddingLeft: "20px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    <span>
                      <Link href="/product/25-10">
                        <a> ТМГ-25/10</a>
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
