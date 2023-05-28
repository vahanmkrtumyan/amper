import { useRouter } from "next/router";
import Image from "next/image";

const content = {
  en: {
    title: "Certificates",
    firstText:
      "Transformer products plant 'AMPER' has certificates government agencies, regulating energy equipment.",
    secondText:
      "In the design of transformators of plant 'AMPER' wide experience of transformer factories in Russia and other CIS countries are beeing used.",
    thirdText:
      "At all stages of production, all parts of the transformer undergo quality control. High The reliability of the final product is ensured by high-quality materials and components from suppliers with many years of manufacturing experience. Transformers fully comply with GOST R 52719-2007 and ISO 9001.",
    forthText:
      "Transformers are compact due to the use of oval windings. Starting with power 400 kVA LV windings made of aluminum ribbons.",
  },
  ru: {
    title: "Сертификаты",
    firstText:
      "Продукция трансформаторного завода «АМПЕР» имеет сертификаты государственных органов, регулирующих энергетическое оборудование.",
    secondText:
      "В конструкции трансформатора завода «АМПЕР» использован широкий опыт трансформаторных заводов России и других стран СНГ.",
    thirdText:
      "На всех этапах производства всех частей трансформатора проходит контроль качества. Высокая надежность итогового изделия обеспечена качественными материалами и комплектующими поставщиков с многолетним опытом производства. Трансформаторы полностью соответствуют ГОСТ Р 52719-2007 и ISO 9001. ",
    forthText:
      "Трансформаторы компактны за счет использования овальных обмоток. Начиная с мощности 400 кВА обмотки НН изготовлены из алюминиевой ленты.",
    fifthText:
      "Оптимальная логистика обеспечивает конкурентную цену продукту. ",
  },
  hy: {
    title: "Սերտիֆիկատներ",
    firstText:
      "«Ամպեր» տրանսֆորմատորային գործարանի արտադրանքն ունի էներգետիլ արտադրանքների կարգավորման պետական ​​մարմինների վկայականներ",
    secondText:
      "«Ամպերի» տրանսֆորմատորների նախագծերում օգտագործվում են Ռուսաստանում և ԱՊՀ այլ երկրներում եղած լայն փորձը։",
    thirdText:
      "Արտադրության բոլոր փուլերում տրանսֆորմատորի բոլոր մասերը ենթարկվում են որակի հսկողության: Վերջնական արտադրանքի հուսալիությունը ապահովվում է արտադրության երկարամյա փորձ ունեցող մատակարարների բարձրորակ նյութերով և բաղադրիչներով:  Տրանսֆորմատորները լիովին համապատասխանում են ԳՕՍՏ R 52719-2007-ին և ISO 9001-ին:",
    forthText:
      "Տրանսֆորմատորները կոմպակտ են օվալաձև ոլորունների օգտագործման շնորհիվ: Սկսած իշխանությունից 400 կՎԱ LV ոլորունները պատրաստված են ալյումինե ժապավեններից",
    fifthText: "Օպտիմալ լոգիստիկան ապահովում է ապրանքի մրցունակ գին:",
  },
};

export default function Principles() {
  const { locale } = useRouter();

  return (
    <>
      <div className="glax_tm_section">
        <div className="glax_tm_principles_wrapper_all">
          <div className="container">
            <div className="glax_tm_twice_box_wrap">
              <div className="inner_box">
                <div className="leftbox">
                  <div className="title_holder">
                    <h3>{content[locale].title}</h3>
                  </div>
                  <div className="description">
                    <p>{content[locale].firstText}</p>
                    <p>{content[locale].secondText}</p>
                    <p>{content[locale].thirdText}</p>
                    <p>{content[locale].forthText}</p>
                    <p>{content[locale].fifthText}</p>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="glax_tm_principles_wrap">
                    <div className="list_wrap">
                      <ul className="masonry">
                        <li
                          className="item"
                          style={{ marginLeft: "200px", width: "60%" }}
                        >
                          <div className="inner">
                            <span className="leftshape" />
                            <span className="topshape" />
                            <div className="in">
                              <Image
                                src="/img/cert.png"
                                width={1000}
                                height={1500}
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
