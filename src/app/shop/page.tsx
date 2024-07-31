import Item from "@/components/Item";

async function getItems() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/items/records",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function Shop() {
  const items = await getItems();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {items?.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
