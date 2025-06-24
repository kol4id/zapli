import styles from './Description.module.scss'

const Description = () => {
    return(
        <>
            <section className={styles.description}
                style={{backgroundImage: 'url(/description.png)'}}
            >
                <div className={styles.main}>
                    <div className={styles.main_left}>
                        <section>
                            <h1>ЗАПЧАСТИ <br/>
                                НА КИТАЙСКИЕ МАРКИ
                            </h1>
                            <h1 className={styles.second}>АВТОМОБИЛЕЙ</h1>
                        </section>
                        <a>Cвязаться с нами</a>
                    </div>
                    <div className={styles.main_right}>
                        <a>7 (915) 111-53-30</a>
                        <a>Одинцово, Можайское шоссе 14В</a>
                    </div>
                </div>
            </section>  
        </> 
    )
}
export default Description