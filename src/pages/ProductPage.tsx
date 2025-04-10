import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productType } from "../lib/definitions";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<productType | null>(null);

  useEffect(() => {
    fetch(`https://ioayoub.fr/api/eshop/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {product ? (
        <article>
          <h1>{product.name}</h1>
          <img src={product.picture} alt="" />
        </article>
      ) : (
        <h1>Ce produit n'existe pas</h1>
      )}
    </>
  );
}
