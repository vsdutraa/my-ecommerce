// styles
import styles from "@/styles/Item.module.css";

// next imports
import Link from "next/link";

export default function Item({ item }: any) {
  const { id, name, img, price } = item;

  return (
    <Link href={`/shop/${id}`}>
      <div className={styles.item}>
        <img className="h-full" src={img} alt={name} />
        <h4>{name}</h4>
        <h2>${price}</h2>
      </div>
    </Link>
  );
}
