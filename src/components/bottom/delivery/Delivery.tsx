import styles from './Delivery.module.scss'
import Image from "next/image";

const Delivery = () =>{
    return(
        <>
            <section className={styles.delivery}>
                <h5>Доставим через:</h5>
                <article className={styles.list}>
                    <div className={styles.card}>
                        <Image
                            src="/sdek.svg"
                            alt='sdek icon'
                            width={154}
                            height={42}
                        />
                    </div>
                    <div className={styles.card}>
                        <Image
                            src="/Dellin_Logo_Black 1.svg"
                            alt='delovie linii logo'
                            width={200}
                            height={20}
                        />
                    </div>
                    <div className={styles.card}>
                        <Image
                            src="/logo-pek 1.svg"
                            alt='pek logo'
                            width={168}
                            height={48}
                        />
                    </div>
                    <div className={styles.card}>
                        <Image
                            src="/energy.png"
                            alt='energy logo'
                            width={164}
                            height={164}
                        />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Delivery