import { Product } from "./types";

const data: Product[] = [
  {
    id: 1,
    name: "Krysantemum",
    price: 39.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg2x/560de1a9/globalassets/catalog-images/7/137375/77041b83a8860d289f0252a94ede0036.jpg",
    description: "En rikblommande färgklick i gult som tål några minusgrader.",
    longDescription:
      "Klassisk höstväxt som tål en frostknäpp. Vid plantering redan på sensommaren så kan den ofta blomma över. Kommer då inte tillbaka med ny blomning men pröva gärna att plantera ut den i skyddat läge. Kan under gynnsamma vintrar komma tillbaka nästa år, Plantera den gärna i större kruka med näringsrik och fuktighetshållande jord. Bollkrysantemum har en stor bladmassa och är därför törstig så var noga med vattningen, speciellt i solig placering. I något skuggigare läge blommar den längre. Kallas för bollkryss i folkmun.",
    amountInStock: 100,
    reviews: [
      {
        id: 1,
        author: "Kalle",
        stars: 5,
        title: "Bra blomma",
        body: "Blommar bra, bra färg och bra storlek.",
      },
    ],
  },
  {
    id: 2,
    name: "Höstljung",
    price: 49.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg2x/b68c8174/globalassets/catalog-images/28/25955/91f7a70d33692e42b4fe586a4f84b2f6.jpg",
    description:
      "Klassisk höstljung som blommar med ceriserosa blomklockor som lockar till sig bin och humlor.",
    longDescription:
      "Klassisk ljung som blommar med ceriserosa blomklockor. Lockar till sig bin och humlor. Lämplig i blandade krukor och balkonglådor, står fin hela vintern om den skyddas mot allt för kraftig nederbörd. Trivs i alla lägen och undvik att jorden torkar upp helt. Vattnas regelbundet tills det fryser.",
    amountInStock: 100,
    reviews: [
      {
        id: 2,
        author: "Kalle",
        stars: 1,
        title: "Kass blomma",
        body: "Blommar dåligt, dålig färg och dålig storlek.",
      },
    ],
  },
  {
    id: 3,
    name: "Hortensia",
    price: 99.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg2x/dbeb3c76/globalassets/catalog-images/7/19273/36187c3c661167eb35e02ec8d6a8e1a4.jpg",
    description: "Elegant och rikblommande klassiker i vitt. ",
    longDescription:
      "Täta blomställningar med vita blommor översållar nästan hela plantan. Trivs bäst i ett ljust, svalt fönster med lätt skugga, direkt sol bör undvikas. Vattnas mycket rikligt och är känslig mot uttorkning. Blommorna är vackra till snitt och som eterneller. Sorten är en krukväxthortensia.",
    amountInStock: 100,
    reviews: [
      {
        id: 3,
        author: "Kalle",
        stars: 5,
        title: "Bra blomma",
        body: "Blommar bra, bra färg och bra storlek.",
      },
    ],
  },
  {
    id: 4,
    name: "Höstbegonia",
    price: 59.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg2x/1e950117/globalassets/catalog-images/7/136173/ebe2a952fa92685d1058f6e72682314c.jpg",
    description: "En rikblommande klassiker som blommar med ljusrosa blommor.",
    longDescription:
      "Trivs på ljus plats, utan direkt solljus och i normal rumstemperatur. Håll jorden lätt fuktig och spraya gärna begonian då och då. Plocka bort vissna blommor efterhand. Undvik färsk frukt i närheten som kan få knopparna att torka och direkt värme som över element.",
    amountInStock: 100,
    reviews: [
      {
        id: 4,
        author: "Kalle",
        stars: 3,
        title: "Ok blomma",
        body: "Blommar ok, ok färg och ok storlek.",
      },
    ],
  },
];

export { data };
