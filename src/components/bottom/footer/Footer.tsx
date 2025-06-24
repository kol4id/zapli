import Image from "next/image";
import styles from './Footer.module.scss'

const Footer = () =>{
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_left}>
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
                </div>
                <div className={styles.footer_right}>
                    made by <a
                        href='https://copylobby.art/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        copylobby.art
                    </a> 
                </div>
            </footer>
        </>
    )
}

export default Footer