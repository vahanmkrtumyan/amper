import { useRouter } from "next/router";

const content = {
  en: {
    about: "About us",
    aboutText:
      "The factory was founded in early 2022. It is the first and only full-cycle transformer production in the Transcaucasus. The main production facilities are located in the industrial centers of Armenia - in the cities of Byureghavan and Hrazdan. In workshops, area several thousand square meters, modern high-tech production facilities with innovative equipment are located. AMPER promotes continuous professional growth and revealing the potential of each employee. The factory team is a team highly qualified professionals, including including the best graduates of universities of the Republic Armenia.",
  },
  ru: {
    about: "О нас",
    aboutText:
      "Завод основан в начале 2022 года. Является первым и единственным трансформаторным производством полного цикла на территории Закавказья. Основные производственные мощности расположены в индустриальных центрах Армении – в городах Бюрегаван и Раздан. В цехах, площадью несколько тысяч квадратных метров, расположились современные высокотехнологичные производства с инновационным оборудованием. «АМПЕР» способствует постоянному профессиональному росту и раскрытию потенциала каждого сотрудника. Коллектив завода – это команда высококвалифицированных специалистов, в том числе и лучшие выпускники вузов Республики Армения.",
  },
  hy: {
    about: "Մեր մասին",
    aboutText:
      "Գործարանը հիմնադրվել է 2022 թվականի սկզբին։ Այն Անդրկովկասում առաջին և միակ ամբողջ ցիկլային տրանսֆորմատորային արտադրությունն է։ Հիմնական արտադրամասերը գտնվում են Հայաստանի արդյունաբերական կենտրոններում՝ ք Բյուրեղավան և Հրազդան քաղաքներում։ Արտադրամասերի տարածքները կազմում են մի քանի հազար քառակուսի մետր։ Դրանք իրենցից ներկայացնելով ժամանակակից բարձր տեխնոլոգիական արտադրական օբյեկտներ՝ նորարարական սարքավորումներով։ «AMPER»-ը նպաստում է շարունակական մասնագիտական ​​աճին և յուրաքանչյուր աշխատակցի ներուժի բացահայտմանը։ Գործարանի թիմը կազմված է բարձր որակավորում ունեցող մասնագետներից, այդ թվում՝ հանրապետության բուհերի լավագույն շրջանավարտներից:",
  },
};

export default function HomeIntroduce() {
  const { locale } = useRouter();

  return (
    <>
      <div className="glax_tm_section introduce">
        <div className="container">
          <div className="qqq" id="about">
            <div className="glax_tm_introduce_wrap">
              <div className="inner_wrap">
                <div className="main_info_wrap">
                  {/* <span className="top_title">Let me introduce</span> */}
                  <h3 className="title">{content[locale].about}</h3>
                  <p className="text">{content[locale].aboutText}</p>
                </div>
                <div className="experience_box">
                  <div className="top">
                    <p>ПРОЕКТНАЯ МОЩНОСТЬ ЗАВОДА</p>
                  </div>
                  <div className="bottom">
                    <div className="number">
                      <span>3000</span>
                    </div>
                    <div className="definition">
                      <p>ТРАНСФОРМАТОРОВ В ГОД</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shape_top">
              <span className="first" />
              <span className="second" />
            </div>
            <div className="shape_bottom">
              <span className="first" />
              <span className="second" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
