'use client';
import CardItem from '../../item/CardItem'
import styles from './ItemList.module.scss'
import { useAppSelector } from '@/store/storeHooks';
import { RootState } from '@/store/store';
import { IProduct } from '@/store/productsSlice';
import { FixedSizeList as List } from 'react-window'; 
import React from 'react';
import { useElementSize } from '@/hooks/useElementSize';


const CardRow = React.memo(({ index, style, data }) => {
    const list = data;
    const item = list[index];

    if (!item) {
        return null;
    }

    return (
        <div style={style}>
            <CardItem 
                item={item} 
            />
        </div>
    );
});

CardRow.displayName = 'CardRow';

const ItemList = () =>{
    const searchValue = useAppSelector((state: RootState) => state.search.value);
    const { ref, width, height } = useElementSize();

    const textMatch = (item: IProduct) =>{
        const searchTerm = searchValue.toLowerCase() 
        const itemText = (item.name + item.type).toLowerCase();
        return itemText.indexOf(searchTerm) !== -1;
    }

    const filteredList = useAppSelector((state: RootState) => state.products.products.filter(textMatch))

    const currentWidth = width > 420
        ? width > 550 ? 135 : 195
        : 184

    if (filteredList.length == 0){
        return(
            <div className={styles.list} ref={ref}>
                <p className={styles.nothing}>Ничего не найдено...</p>
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
                    itemCount={filteredList.length}
                    itemSize={currentWidth}
                    itemData={filteredList}
                    // 
                >
                    {CardRow}
                </List>
            </div>
        </>
    )
}
export default ItemList