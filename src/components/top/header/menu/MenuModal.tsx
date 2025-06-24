'use client';
import { FC } from 'react';
import styles from './MenuModal.module.scss'
import Image from "next/image";

interface IProps {
    onClose: () => void
}

const MenuModal: FC<IProps> = ({onClose}) =>{

    const handleClose = () =>{
        onClose();
    }

    return(
        <>
            <div style={{backgroundColor: 'white', height: '100%'}}>
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
                <section className={styles.menu}>
                    <h6>Контакты</h6>
                    <div>
                        <a
                            // href='https://yandex.ru/maps/org/gornostay/235157433113/?ll=37.851755%2C55.768490&z=14'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                        <a
                            // href='https://yandex.ru/maps/org/gornostay/235157433113/?ll=37.851755%2C55.768490&z=14'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Telegram
                        </a>
                    </div>
                </section>
            </div>
            {/* <ItemList/> */}
        </>
    )
}

export default MenuModal