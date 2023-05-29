import { useRouter } from "next/router";
import Image from "next/image";

const content = {
  en: {
    clients: "Our Clients",
    firstText:
      "'AMPER' is in constant dialogue and build mutually beneficial collaboration with partners, offering optimal solutions for the assigned tasks.",
    secondText:
      "The key clients of the company are 'Electric Networks of Armenia' and the Russian holding 'CASKAD'",
  },
  ru: {
    clients: "Наши клиенты",
    firstText:
      "«АМПЕР» находится в постоянном диалоге и строит взаимовыгодное сотрудничество с партнерами, предлагая оптимальные решения  для поставленных задач.",
    secondText:
      "Ключевыми клиентами компании являются «Электрические сети Армении» и российский многопрофильный холдинг «КАСКАД»",
  },
  hy: {
    clients: "Մեր հաճախորդները",
    firstText:
      "Ամպերը-ը մշտապես գտնվում է բանակցությունների մեջ և կառուցում է փոխշահավետ համագործակցություն գործընկերների հետ, առաջարկելով օպտիմալ լուծումներ համապատասխան առաջադրանքների համար։",
    secondText:
      "Մեր հիմնական հաճախորդներն են հանդիսանում  «Հայաստանի Էլեկտրական Ցանցերը» և ռուսական «Կասկադ» հոլդինգը",
  },
};

export default function Principles() {
  const { locale } = useRouter();

  return (
    <>
      <div className="glax_tm_section" id="clients">
        <div className="glax_tm_principles_wrapper_all">
          <div className="container">
            <div className="glax_tm_twice_box_wrap">
              <div className="inner_box">
                <div className="leftbox">
                  <div className="title_holder">
                    <h3>{content[locale].clients}</h3>
                  </div>
                  <div className="description">
                    <p>{content[locale].firstText}</p>
                    <p>{content[locale].secondText}</p>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="glax_tm_principles_wrap">
                    <div className="list_wrap">
                      <ul className="masonry">
                        <li className="item">
                          <div className="inner">
                            <span className="leftshape" />
                            <span className="topshape" />
                            <div className="in">
                              <Image
                                src="/img/hets.png"
                                width={183 * 2}
                                height={213 * 2}
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="inner">
                            <span className="leftshape" />
                            <span className="topshape" />
                            <div className="in">
                              <Image
                                src="/img/kaskad.png"
                                width={285 * 1.5}
                                height={197 * 1.5}
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
