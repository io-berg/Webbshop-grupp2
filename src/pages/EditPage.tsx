import { FC } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditPage: FC = () => {
  const params = useParams<{ Id: string }>();

  const mockProduct = {
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
  };

  if (!mockProduct) {
    return <p>Invoice does not exist</p>;
  }
  return (
    <div className="w-screen flex items-center flex-col">
      <h2 className="text-5xl font-extrabold"> Ändra Produkt</h2>
      <ProductForm product={mockProduct} />
    </div>
  );
};

export default EditPage;
