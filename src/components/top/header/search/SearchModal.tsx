'use client';
import { FC } from 'react';
import styles from './SearchModal.module.scss'
import Image from "next/image";
import ItemList from './ItemList';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { RootState } from '@/store/store';
import { searchSetValue } from '@/store/searchSlice';

interface IProps {
    onClose: () => void
}

const SearchModal: FC<IProps> = ({onClose}) =>{
    const searchValue = useAppSelector((state: RootState) => state.search.value)
    const dispatch = useAppDispatch();

    const handleClose = () =>{
        dispatch(searchSetValue(''))
        onClose();
    }

    return(
        <>
            <header className={styles.header}>
                <section className={styles.search}>
                    <div className={styles.search_line}>
                        <input className={styles.search_input} 
                            placeholder='Найти запчасть...'
                            value={searchValue}
                            onChange={e => {dispatch(searchSetValue(e.target.value))}}
                        />
                        <Image
                            className={styles.icon}
                            src="/search.svg"
                            alt='whatss app'
                            width={24}
                            height={24}
                        />
                    </div>
                    <button onClick={() => handleClose()}>
                        <Image
                            className={styles.icon}
                            src="/close.svg"
                            alt='close icon'
                            width={16}
                            height={16}
                        />
                    </button>
                </section>
            </header>
            {searchValue && <ItemList/>}
        </>
    )
}

export default SearchModal