import { useState } from "react";
import products from "../assets/data/products.json";
import Card from "./Card";

export default function CardList() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Syntaxe raccourcie directement (explications à venir)
  const categories = products.map((p) => p.category);
  // TODO A suivre : affichage des boutons de façon dynamique
  // TODO A suivre : Ajouter le typage

  console.log("categories", categories);

  return (
    <>
      <button
        className="border p-4"
        onClick={() =>
          setFilteredProducts(products.filter((p) => p.category.includes("")))
        }
      >
        Tout
      </button>

      {/* <button
        className="border p-4"
        onClick={() =>
          setFilteredProducts(
            products.filter((p) => p.category.includes("Sports"))
          )
        }
      >
        Sports
      </button> */}
      <div className="flex flex-wrap gap-12 justify-center my-12">
        {filteredProducts.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
