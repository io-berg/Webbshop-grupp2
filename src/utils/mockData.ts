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
  {
    id: 5,
    name: "Brudorkidé",
    price: 149,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg1x/11416a19/globalassets/catalog-images/7/4159/faccd26e9fd61a18ee7fc369970c83c0.jpg",
    description:
      "Underbart vacker, otroligt riklig blomning, med små blommor på välförgrenade stänglar.",
    longDescription:
      "Brudorkidén har ingen viloperiod, utan kan blomma när som helst på året. Låt stängeln vissna själv, klipp bort den torra delen så brukar det komma nya skott och nya blommor.",
    amountInStock: 100,
    reviews: [
      {
        id: 5,
        author: "Kalle",
        stars: 4,
        title: "Mycket bra",
        body: "Blommar bra, ok färg och ok storlek.",
      },
    ],
  },
  {
    id: 6,
    name: "Bukettbouvardia",
    price: 79.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Sm1x/2a1913ee/globalassets/catalog-images/7/21330/ffedc6479f98429041060569f3c21667.jpg",
    description: "Blommar med små, söta vita blommor samlade i flock.",
    longDescription:
      "Trivs på ljus växtplats men undvik direkt sol. Placeras gärna något svalare på vintern och vattnas då sparsamt. Planteras om på våren. Håller fint som snittblomma.",
    amountInStock: 100,
    reviews: [
      {
        id: 6,
        author: "Kalle",
        stars: 3,
        title: "Ok blomma",
        body: "Blommar ok, ok färg och ok storlek.",
      },
    ],
  },
  {
    id: 7,
    name: "Rosenkalla",
    price: 149,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Sm1x/775d1217/globalassets/catalog-images/7/1380/7bbad16b65efcab098a308c1e9f1665e.jpg",
    description: "Elegant växt med luftrenande egenskaper.",
    longDescription:
      "Håll rothalsen täckt med fuktig jord eller mossa, det främjar blomningen. Planteras om i lucker, porös jord och djupt i hög kruka. Vill stå ljust men inte i stark sol. Känslig för temperaturer under 15° och ska vattnas med ljummet vatten. Blomvillig växt med hållbara blommor. Lättskött och flerårig.",
    amountInStock: 100,
    reviews: [
      {
        id: 7,
        author: "Kalle",
        stars: 3,
        title: "Ok blomma",
        body: "Blommar ok, ok färg och ok storlek.",
      },
    ],
  },
  {
    id: 8,
    name: "Våreld",
    price: 39.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Sm1x/179b8018/globalassets/catalog-images/7/20897/55ef699d31a5f8faaf93d1bb7970a15b.jpg",
    description:
      "En lättskött och tålig klassiker som blommar länge med knippen av söta, rosa blommor.",
    longDescription:
      "En ljus och solig placering ger den längsta blomningen och blomfärgen blir klarare. Eftersom vårelden är en suckulent tål den både torka och torr luft och passar utmärkt i vårt inomhusklimat. Låt jorden torka ut mellan rikliga vattningar men undvik att vatten blir stående i krukan eller på fatet. Kan placeras utomhus sommartid, bladen bli vackert rödskimrande av starkt solljus.",
    amountInStock: 100,
    reviews: [
      {
        id: 8,
        author: "Kalle",
        stars: 3,
        title: "Ok blomma",
        body: "Blommar ok, ok färg och ok storlek.",
      },
    ],
  },
  {
    id: 9,
    name: "Saintpaulia",
    price: 49.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Sm1x/9f4e4a76/globalassets/catalog-images/7/2688/d385c63421ccd0b46521024e0f8c2e85.jpg",
    description: "En klassisk växt som finns i många spännande sorter.",
    longDescription:
      "På sommaren kan saintpaulian stå i ett norrfönster, men på vintern behöver den mycket ljus för att sätta knopp och trivs då bäst i ett söderfönster. Aldrig under 16°. Vattna med ljummet vatten och undvik vattenstänk på bladen. Planteras om på våren i blomjord. Lätt att föröka med blad eller genom delning.",
    amountInStock: 100,
    reviews: [
      {
        id: 9,
        author: "Mia",
        stars: 4,
        title: "Mycket bra",
        body: "Blommar bra, ok färg och ok storlek.",
      },
    ],
  },
  {
    id: 10,
    name: "Rosenskärm",
    price: 199,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Sm1x/a38da898/globalassets/catalog-images/7/5739/0c2f3be6226bbb4f99700ae67684e27f.jpg",
    description: "Magnifik växt med rosa blommor i stora klasar.",
    longDescription:
      "Placeras mycket ljust och varmt och i hög luftfuktighet. Jorden får inte torka ut och plantan kan vara mycket törstig under blomningen. Duscha på bladen. Vintertid inte under 18°. Gärna under växtbelysning. Planteras om på våren i hög kruka och porös jord. Står i knopp länge.",
    amountInStock: 100,
    reviews: [
      {
        id: 10,
        author: "Vicki",
        stars: 4,
        title: "fin blomma",
        body: "Blommar ok, ok färg men lite hängig",
      },
    ],
  },
  {
    id: 11,
    name: "Inkakrona",
    price: 249,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Sm1x/c6ebb417/globalassets/catalog-images/7/5189/a444d8be8e38e7f7094aaed08831f424.jpg",
    description: "En lättskött växt med vackra färgkontraster.",
    longDescription:
      "Inkakrona trivs bäst i varm och fuktig luft. Skona den från temperaturer under 16° och från torr luft. Jorden bör inte torka ut. Ge endast svaga doser näring. Blommar mitt i vintern, axen håller mycket länge. Inkakronan kan delas vid behov och är flerårig.",
    amountInStock: 100,
    reviews: [
      {
        id: 11,
        author: "Matilda",
        stars: 3,
        title: "Ok blomma",
        body: "Blommar sådär, ok färg och ok storlek.",
      },
    ],
  },
  {
    id: 12,
    name: "Cyklamen",
    price: 59.99,
    imgUrl:
      "https://www.blomsterlandet.se/optimized/c-ProductDetailsSingle-Default-Lg1x/740e4c94/globalassets/catalog-images/7/56589/ec843eb82e100fcb6a2509c81fac1ea1.jpg",
    description:
      "Cyklamen tillhör de växter som bara finns en del av året, kanske är det därför den är så efterlängtad och så omtyckt. Här i en fin röd nyans",
    longDescription:
      "Ju svalare plats desto bättre. Aldrig över direkt värme. Vattna med tunn stråle i krukans kant, inte på knölen eller i plantan. Vissna stjälkar snurras ett par varv och dras upp med ett ryck. Fin ute, till exempel i höstkruka och på gravplats, klarar kyla men inte ihållande frost.",
    amountInStock: 100,
    reviews: [
      {
        id: 12,
        author: "Pelle",
        stars: 4,
        title: "Bra blomma",
        body: "Blommar ok, ok färg, liten storlek.",
      },
    ],
  },
];

export { data };
