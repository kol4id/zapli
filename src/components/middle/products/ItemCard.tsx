import { FC } from 'react'
import styles from './ItemCard.module.scss'
import Image from "next/image";

interface IProps{
    price: number,
    name: string,
    stock: number
}

const ItemCard: FC<IProps> = (props) =>{
    return(
        <>
            <article className={styles.item}>
                <div className={styles.item_img}>
                    <Image
                        src="/no_photo.svg"
                        alt='no image loaded'
                        width={96}
                        height={96}
                    />
                </div>
                <div className={styles.item_description}>
                    <h6>{props.price}₽</h6>
                    <p className={styles.title}>{props.name}</p>
                    <p className={styles.stock}>В наличии: {props.stock} шт.</p>
                </div>
            </article>
        </>
    )
}

export default ItemCard