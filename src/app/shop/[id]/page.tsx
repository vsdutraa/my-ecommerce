import Item from "@/components/Item";

async function getItem(itemId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/items/records/${itemId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function ItemPage({ params }: any) {
  const { name, img, description, price } = await getItem(params.id);

  return (
    <div className="flex">
      <div className="h-full">
        <img className="" src={img} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
