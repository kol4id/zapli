'use client';
import { FC } from 'react';
import styles from './CardItem.module.scss'
import Image from "next/image";
import { useAppDispatch } from '@/store/storeHooks';
import { cartDeleteItem } from '@/store/cartSlice';
import { IProduct } from '@/store/productsSlice';

interface CardProps{
    index: number,
    item: IProduct,
}

const CardItem: FC<CardProps> = ({index, item}) =>{

    const dispatch = useAppDispatch();

    const handleClick = () =>{
        dispatch(cartDeleteItem(index))
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
                                alt='in stcok icon'
                                width={15}
                                height={15}
                            />
                        </p>
                        <p className={styles.info_name}>{item.name}</p>
                        <p className={styles.info_price}>{`Цена: ${item.price} ₽`}</p>
                    </article>
                </section>
                <button onClick={handleClick} className={styles.button_cart}>
                    <p>Удалить</p>
                    <Image
                        src="/trash.svg"
                        alt='trash icon'
                        width={24}
                        height={24}
                    />
                </button>
            </li>
        </>
    )
}

export default CardItem