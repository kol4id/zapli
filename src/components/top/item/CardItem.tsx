'use client';
import { FC } from 'react';
import styles from './CardItem.module.scss'
import Image from "next/image";
import { useAppDispatch } from '@/store/storeHooks';
import { cartAddItem } from '@/store/cartSlice';
import { IProduct } from '@/store/productsSlice';

interface CardProps{
    item: IProduct,
}

const CardItem: FC<CardProps> = ({item}) =>{

    const dispatch = useAppDispatch();

    const handleClick = () =>{
        dispatch(cartAddItem(item))
    }

    return(
        <>
            <li className={styles.item}>
                <section className={styles.item_description}>
                    <div className={styles.img}>
                        <Image
                            src="/no_photo.svg"
                            alt='no image loaded'
                            width={64}
                            height={64}
                        />
                    </div>
                    <article className={styles.info}>
                        <p className={styles.info_stock}>
                            В наличии
                            <Image
                                src="/inStock.svg"
                                alt='no image loaded'
                                width={15}
                                height={15}
                            />
                        </p>
                        <p className={styles.info_name}>{item.name}</p>
                        <p className={styles.info_price}>{`Цена: ${item.price} ₽`}</p>
                    </article>
                </section>
                <button onClick={handleClick}>В корзину</button>
            </li>
        </>
    )
}

export default CardItem