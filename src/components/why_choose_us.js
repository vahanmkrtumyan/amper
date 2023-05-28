import React from "react";
import { useRouter } from "next/router";

const content = {
  en: {
    title: "PURPOSE OF PRODUCTS",
    first:
      "The main products of the plant are distribution transformers designed to power general-purpose electrical consumers.",
    second:
      "The voltage regulation of the HV windings is carried out in steps of ± 2 × 2.5% when disconnected from network transformer by rearranging the positions of the switch located on the top cover of the transformer tank.",
    thirdTitle: "Heat resistance class of winding insulation:",
    third: "A according to ГОСТ 8865-93",
    fourthTitle: "Transformer Cooling:",
    fourth: "by oil, natural",
    fifthTitle: "Type of transformers:",
    fifth: "TOT (three-phase oil tight in a corrugated tank)",
    sixthTitle: "Power of transformators",
    sixth: "25 kW … 2500 kW",
    seventhTitle: "Voltage the highest:",
    seventh: "10 kV; 6 kV",
    eightTitle: "Voltage the lowest:",
    eight: "0.4kV",
    ninthTitle: "Winding connection diagrams:",
    ninth: "Y/Yн-0 Δ/Yн-11",
  },
  ru: {
    title: "НАЗНАЧЕНИЕ ПРОДУКЦИИ",
    first:
      "Основная продукция завода – распределительные трансформаторы, предназначенные для питания электропотребителей общего назначения",
    second:
      "Регулирование напряжения обмоток ВН осуществляется ступенями ±2×2,5% при отключенном от сети трансформаторе путем перестановки положений переключателя, расположенного на верхней крышке бака трансформатора.",
    thirdTitle: "Класс нагревостойкости изоляции обмоток:",
    third: "«А» по ГОСТ 8865-93",
    fourthTitle: "Охлаждение трансформатора:",
    fourth: "масляное, естественное",
    fifthTitle: "Тип трансформаторов:",
    fifth: "ТМГ (трехфазные масляные герметичные в гофробаке)",
    sixthTitle: "Мощность трансформаторов:",
    sixth: "25 кВА … 2500 кВА",
    seventhTitle: "Напряжение ВН:",
    seventh: "10 кВ; 6 кВ",
    eightTitle: "Напряжение НН:",
    eight: "0.4кВ",
    ninthTitle: "Схемы соединения обмоток:",
    ninth: "Y/Yн-0 Δ/Yн-11",
  },
  hy: {
    title: "ԱՊՐԱՆՔՆԵՐԻ ՆՇԱՆԱԿՈՒԹՅՈՒՆԸ",
    first:
      "Գործարանի հիմնական արտադրանքը բաշխիչ տրանսֆորմատորներն են, որոնք նախատեսված են ընդհանուր նշանակության սպառողներին սնուցելու համար:",
    second:
      "HV ոլորունների լարման կարգավորումն իրականացվում է ± 2 × 2,5% քայլերով, երբ անջատված է: Ցանցային տրանսֆորմատոր՝ վերադասավորելով տրանսֆորմատորային բաքի վերին ծածկի վրա գտնվող անջատիչի դիրքերը։",
    thirdTitle: "Ոլորուն մեկուսացման ջերմային դիմադրության դաս",
    third: "А ըստ ГОСТ 8865-93-ի",
    fourthTitle: "Տրանսֆորմատորի սառեցում",
    fourth: "յուղով, բնական",
    fifthTitle: "Տրանսֆորմատորների տեսակները",
    fifth: "Եռաֆազ յուղային հերմետիկ գոֆրե տարայի մեջ",
    sixthTitle: "Տրանսֆորմատորների հզորությունը",
    sixth: "25ից 2500 կՎտ",
    seventhTitle: "Լարում առավելագույն",
    seventh: "10 կՎ, 6 կՎ",
    eightTitle: "Լարում նվազագույն",
    eight: "0.4կՎ",
    ninthTitle: "Փաթաթման միացման դիագրամներ",
    ninth: "Y/Yн-0 Δ/Yн-11",
  },
};

export default function WhyChooseUs() {
  const { locale } = useRouter();

  return (
    <>
      <div className="glax_tm_section">
        <div className="glax_tm_rating_wrap">
          <div className="container">
            <div className="inner">
              <div className="leftbox">
                <div className="title">
                  <h3>{content[locale].title}</h3>
                </div>
                <div className="text">
                  <p>{content[locale].first}</p>
                </div>
                <div className="text">
                  <p>{content[locale].second}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].thirdTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].third}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].fourthTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].fourth}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].fifthTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].fifth}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].sixthTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].sixth}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].seventhTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].seven}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].eightTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].eight}</p>
                </div>
                <div className="subTitle">
                  <p>{content[locale].ninthTitle}</p>
                </div>
                <div className="text">
                  <p>{content[locale].ninth}</p>
                </div>
              </div>
              <div className="ratingbox">
                <div className="rating_wrap">
                  <div className="inner_wrap">
                    <div className="star">
                      <img src="img/rating/rate.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="bg_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
