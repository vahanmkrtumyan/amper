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
              <div className="product_list">
                <ul>
                  <li>
                    <span>
                      <Link href="/product/25-10">
                        <a>ТМГ-25/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/40-10">
                        <a>ТМГ-40/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/63-10">
                        <a>ТМГ-63/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/100-10">
                        <a>ТМГ-100/10</a>
                      </Link>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      <Link href="/product/160-10">
                        <a>ТМГ-160/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/250-10">
                        <a>ТМГ-250/10</a>
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span>
                      <Link href="/product/400-10">
                        <a>ТМГ-400/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/630-10">
                        <a>ТМГ-630/10</a>
                      </Link>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      <Link href="/product/1000-10">
                        <a>ТМГ-1000/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/1250-10">
                        <a>ТМГ-1250/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/1600-10">
                        <a>ТМГ-1600/10</a>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link href="/product/2500-10">
                        <a>ТМГ-2500/10</a>
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
