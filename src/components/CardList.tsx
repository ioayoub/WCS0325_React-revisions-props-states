import { useEffect, useState } from "react";
import { productType } from "../lib/definitions";
import Card from "./Card";

export default function CardList() {
  const [products, setProducts] = useState<productType[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<
    productType[] | null
  >(products);
  const [categories, setCategories] = useState<string[] | null>(null);

  useEffect(() => {
    fetch("https://ioayoub.fr/api/eshop")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products) {
      // const categories = products.map((p) => p.category);

      // new Set(tableau) --> retourne valeurs uniques
      // const uniqueSet = new Set(categories);

      // ... extraire les valeurs et les insérer dans un tableau
      // const extractedValuesToArray = [...uniqueSet];

      // ou syntaxe raccourcie :
      setCategories([...new Set(products.map((p) => p.category))]);
      setFilteredProducts(products);
    }
  }, [products]);

  // console.log("categories", categories);

  return (
    <>
      <div className="flex gap-4 justify-center my-12">
        <button
          className="border px-4 py-2 bg-slate-500 text-white cursor-pointer"
          onClick={() =>
            setFilteredProducts(
              products && products.filter((p) => p.category.includes(""))
            )
          }
        >
          Tout
        </button>

        {categories &&
          categories.map((c, index) => (
            <button
              key={index}
              className="border px-4 py-2 bg-slate-500 text-white cursor-pointer"
              onClick={() =>
                setFilteredProducts(
                  products &&
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
      </div>

      <div className="flex flex-wrap gap-12 justify-center my-12">
        {filteredProducts ? (
          filteredProducts.map((p) => <Card key={p.id} product={p} />)
        ) : (
          <>
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
            <h1>Chargement en cours ...</h1>
          </>
        )}
      </div>
    </>
  );
}
