'use client';
import styles from './ItemList.module.scss'
import { useAppSelector } from '@/store/storeHooks';
import { RootState } from '@/store/store';
import { IProduct } from '@/store/productsSlice';
import { FixedSizeList as List } from 'react-window'; 
import React from 'react';
import { useElementSize } from '@/hooks/useElementSize';
import CartItem from '../../item/CartItem';


const CardRow = React.memo(({ index, style, data }) => {
    const list = data;
    const item = list[index];

    if (!item) {
        return null;
    }

    return (
        <div style={style}>
            <CartItem
                index={index}
                item={item} 
            />
        </div>
    );
});

CardRow.displayName = 'CardRow';

const ItemList = () =>{
    const { ref, width, height } = useElementSize();

    const list = useAppSelector((state: RootState) => state.cart.items)

    const currentWidth = width > 420
        ? width > 550 ? 135 : 195
        : 184

    if (list.length == 0){
        return(
            <div className={styles.list} ref={ref}>
                <p className={styles.nothing}>Корзина пуста...</p>
            </div>
        )
    }

    return(
        <>
            <div className={styles.list} ref={ref}>
                <List
                    className={styles.smart_list}
                    height={height} 
                    width={width}
                    itemCount={list.length}
                    itemSize={currentWidth}
                    itemData={list}
                >
                    {CardRow}
                </List>
                <section className={styles.buy}>
                    <button className={styles.buy_button}>Оформить</button>
                </section>
            </div>
        </>
    )
}
export default ItemList