import { useState } from "react";
import products from "../assets/data/products.json";
import Card from "./Card";

export default function CardList() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Syntaxe raccourcie directement (explications à venir)
  // TODO A suivre : affichage des boutons de façon dynamique
  const categories = products.map((p) => p.category);

  // new Set(tableau) --> retourne valeurs uniques
  const uniqueSet = new Set(categories);

  // ... extraire les valeurs et les insérer dans un tableau
  const extractedValuesToArray = [...uniqueSet];

  // ou syntaxe raccourcie :
  // const categories = [...new Set(products.map((p) => p.category)]

  // []

  // TODO A suivre : Ajouter le typage

  // console.log("categories", categories);

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

      {extractedValuesToArray.map((c) => (
        <button
          className="border p-4"
          onClick={() =>
            setFilteredProducts(
              products.filter((p) =>
                p.category
                  .trim()
                  .toLocaleLowerCase()
                  .includes(c.trim().toLocaleLowerCase())
              )
            )
          }
        >
          {c}
        </button>
      ))}

      <div className="flex flex-wrap gap-12 justify-center my-12">
        {filteredProducts.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
