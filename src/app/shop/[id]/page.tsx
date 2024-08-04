"use client";

// imports
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

// function to fetch item from database
async function getItem(itemId: string) {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/items/records/${itemId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();
  return data;
}

// ItemPage component
export default function ItemPage({ params }: any) {
  const [item, setItem] = useState<any>(null);
  const { addToCart } = useCart();

  // fetch item data on component mount or when params.id changes
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItem(params.id);
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [params.id]);

  // handle adding item to cart
  const handleAddToCart = () => {
    addToCart(item);
  };

  // show loading state if item data is not available
  if (!item) {
    return <p>Loading...</p>;
  }

  // destructure item properties
  const { name, img, description, price } = item;

  // render item details
  return (
    <div className="flex">
      <div className="h-full">
        <img className="object-cover" src={img} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <p>${price}</p>
        <p>{description}</p>
        <button onClick={handleAddToCart} disabled={!item}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
