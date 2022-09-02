import { FC } from "react";
import { useParams } from "react-router-dom";

const EditPage: FC = () => {
  const params = useParams<{ Id: string }>();

  {
    /*Temporär produkt till context klar*/
  }
  const product = params;

  if (!product) {
    return <p>Invoice does not exist</p>;
  }
  return (
    <div className="w-screen flex items-center flex-col">
      <h2 className="text-5xl font-extrabold"> Ändra Produkt</h2>
      {/*Sätt in formulär component här*/}
    </div>
  );
};

export default EditPage;
