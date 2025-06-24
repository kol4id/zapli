'use client';
import { FC } from 'react';
import styles from './CartModal.module.scss'
import Image from "next/image";
import ItemList from './ItemList';

interface IProps {
    onClose: () => void
}

const CartModal: FC<IProps> = ({onClose}) =>{

    const handleClose = () =>{
        onClose();
    }

    return(
        <>
            <header className={styles.header}>
                <section>
                    <Image
                        src="/logo.svg"
                        alt='zapli logo'
                        width={105}
                        height={48}
                    />
                </section>
                <button onClick={() => handleClose()}>
                    <Image
                        className={styles.icon}
                        src="/close.svg"
                        alt='close icon'
                        width={16}
                        height={16}
                    />
                </button>
            </header>
            <ItemList/>
        </>
    )
}

export default CartModal