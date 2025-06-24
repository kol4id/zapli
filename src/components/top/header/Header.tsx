import styles from './Header.module.scss'
import Image from "next/image";

const Header = () =>{
    return(
        <>
            <header className={styles.header}>
                <section className={styles.logo}
                    style={{backgroundImage: 'url(/logo.svg)'}}
                />
                <section className={styles.search}>
                    <div className={styles.search_line}>
                        <input className={styles.search_input} placeholder='Найти запчасть...'/>
                        <Image
                            className={styles.icon}
                            src="/search.svg"
                            alt='search icon'
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className={styles.search_buttons}>
                        <a
                            // href='https://yandex.ru/maps/org/gornostay/235157433113/?ll=37.851755%2C55.768490&z=14'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/wa.svg"
                                alt='whatss app'
                                width={24}
                                height={24}
                            />
                        </a>
                        <a
                            // href='https://yandex.ru/maps/org/gornostay/235157433113/?ll=37.851755%2C55.768490&z=14'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/tg.svg"
                                alt='telegram'
                                width={24}
                                height={24}
                            />
                        </a>
                        <button>
                            Корзина
                            <Image
                                src="/cart.svg"
                                alt='cart icon'
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header