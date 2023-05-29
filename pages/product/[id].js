// import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../src/layout/layout";

const products = {
  "25-10": {
    name: "ТМГ-25/10",
    power: 25,
    mpxx: 115,
    mpkz: 600,
    tokxx: "2.4",
    napr: "4.5",
    oil: 70,
    massa: 280,
  },
  "40-10": {
    name: "ТМГ-40/10",
    power: 40,
    mpxx: 155,
    mpkz: 880,
    tokxx: "2.2",
    napr: "4.5",
    oil: 80,
    massa: 300,
  },
  "63-10": {
    name: "ТМГ-63/10",
    power: 63,
    mpxx: 220,
    mpkz: 1280,
    tokxx: "2.0",
    napr: "4.5",
    oil: 100,
    massa: 400,
  },
  "100-10": {
    name: "ТМГ-100/10",
    power: 100,
    mpxx: 290,
    mpkz: 1970,
    tokxx: "1.8",
    napr: "4.5",
    oil: 120,
    massa: 510,
  },
  "160-10": {
    name: "ТМГ-160/10",
    power: 160,
    mpxx: 410,
    mpkz: 2600,
    tokxx: "1.6",
    napr: "4.5",
    oil: 160,
    massa: 710,
  },
  "160-10": {
    name: "ТМГ-160/10",
    power: 160,
    mpxx: 410,
    mpkz: 2600,
    tokxx: "1.6",
    napr: "4.5",
    oil: 160,
    massa: 710,
  },
  "250-10": {
    name: "ТМГ-250/10",
    power: 250,
    mpxx: 570,
    mpkz: 3700,
    tokxx: "1.4",
    napr: "4.5",
    oil: 200,
    massa: 885,
  },
  "400-10": {
    name: "ТМГ-400/10",
    power: 400,
    mpxx: 830,
    mpkz: 5400,
    tokxx: "1.3",
    napr: "4.5",
    oil: 245,
    massa: 1235,
  },
  "630-10": {
    name: "ТМГ-630/10",
    power: 630,
    mpxx: 1060,
    mpkz: 7450,
    tokxx: "1.1",
    napr: "5.0",
    oil: 405,
    massa: 1800,
  },
  "1000-10": {
    name: "ТМГ-1000/10",
    power: 1000,
    mpxx: 1400,
    mpkz: 10800,
    tokxx: "0.7",
    napr: "5.0",
    oil: 540,
    massa: 2460,
  },
  "1250-10": {
    name: "ТМГ-1250/10",
    power: 1250,
    mpxx: 1650,
    mpkz: 13500,
    tokxx: "0.6",
    napr: "6.0",
    oil: 730,
    massa: 3100,
  },
  "1600-10": {
    name: "ТМГ-1600/10",
    power: 1600,
    mpxx: 2150,
    mpkz: 16500,
    tokxx: "0.6",
    napr: "6.0",
    oil: 1050,
    massa: 3800,
  },
  "2500-10": {
    name: "ТМГ-2500/10",
    power: 2500,
    mpxx: 2600,
    mpkz: 26500,
    tokxx: "0.6",
    napr: "6.0",
    oil: 1300,
    massa: 5600,
  },
};

const content = {
  ru: {
    first: "Тип трансформатора, класс напряжения:",
    kv: "кВ",
    second: "Номинальная мощность:",
    third: "Параметры напряжения ВН",
    fourth: "Параметры напряжения Диапазон регулирования",
    fifth: "Параметры напряжения НН",
    sixth: "Схема соединения обмоток",
    seventh: "Мощность потерь х.х. Вт",
    eight: "Мощность потерь к.з. Вт",
    ninth: "Ток х.х.",
    tenth: "Напряжение к.з.",
    eleventh: "Масса масла кг",
    tweleve: "Полная масса трансформатора кг",
  },
  hy: {
    first: "Տրանսֆորմատորի տեսակը, լարման դասը.",
    kv: "կՎ",
    second: "Անվանական հզորություն:",
    third: "Լարման պարամետրեր ԲԼ",
    fourth: "Լարման պարամետրեր Կարգավորման տիրույթ",
    fifth: "Լարման պարամետրեր ՑԼ",
    sixth: "Փաթաթման միացման դիագրամ",
    seventh: "Պարապ վիճակի հոսանքի կորուստ Վտ",
    eight: "Կարճ միացման հոսանքի կորուստ Վտ",
    ninth: "Պարապ վիճակի լարում",
    tenth: "Կարճ միացման լարում",
    eleventh: "Յուղի զանգված կգ",
    tweleve: "Տրանսֆորմատորի համախառն քաշը կգ",
  },
  en: {
    first: "Transformer type, voltage class:",
    kv: "kV",
    second: "Nominal power:",
    third: "Voltage parameters HV",
    fourth: "Voltage parameters Adjustment range",
    fifth: "Voltage parameters LV",
    sixth: "Winding connection diagram",
    seventh: "Idle power loss Wt",
    eight: "Short circuit power loss Wt",
    ninth: "Idle Current",
    tenth: "Short circuit Current",
    eleventh: "Oil mass kg",
    tweleve: "Gross transformer weight kg",
  },
};

export default function Product() {
  const { locale, query } = useRouter();
  console.log(query.id);
  return (
    <>
      <Layout style={"light"}>
        <div>
          <div className="glax_tm_section" style={{ padding: "50px" }}>
            <div>
              {content[locale].first}{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.name}
              </span>
            </div>
            <div>
              {content[locale].second}{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.power} {products[query.id]?.kv}
              </span>
            </div>
            <div>
              {content[locale].third}:{" "}
              <span style={{ color: "#45a2df" }}>
                10, 6 {products[query.id]?.kv}
              </span>
            </div>
            <div>
              {content[locale].fourth}:{" "}
              <span style={{ color: "#45a2df" }}>±2×2.5 %</span>
            </div>
            <div>
              {content[locale].fifth}:{" "}
              <span style={{ color: "#45a2df" }}>0.4 {content[locale].kv}</span>
            </div>
            <div>
              {content[locale].sixth}:{" "}
              <span style={{ color: "#45a2df" }}>Y/Yн-0</span>
            </div>
            <div>
              {content[locale].seventh}:{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.mpxx}
              </span>
            </div>
            <div>
              {content[locale].eight}:{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.mpkz}
              </span>
            </div>
            <div>
              {content[locale].ninth} %:{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.tokxx}
              </span>
            </div>
            <div>
              {content[locale].tenth} %:{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.napr}
              </span>
            </div>
            <div>
              {content[locale].eleventh}:{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.oil}
              </span>
            </div>
            <div>
              {content[locale].tweleve}:{" "}
              <span style={{ color: "#45a2df" }}>
                {products[query.id]?.massa}
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
