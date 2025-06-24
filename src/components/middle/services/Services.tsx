import styles from './Services.module.scss'
import Image from "next/image";

const Services = () =>{
    return(
        <>
            <section className={styles.services}>
                <div className={styles.services_title}>
                    <h5>Услуги:</h5>
                </div>
                <section className={styles.main}>
                    <article className={styles.main_left}>
                        <div className={styles.main_left_item}>
                            <h6>Доставка деталей на заказ</h6>
                            <p>Привезём детали из США, Европы и Китая. Работаем с проверенными поставщиками.</p>
                            <p className={styles.mobile}>Привезём детали из США, Европы и Китая. Проверенные поставщики. Доставляем быстро и с гарантией.</p>
                        </div>
                        <div className={styles.main_left_item}>
                            <h6>Точный подбор запчастей</h6>
                            <p>Специалисты подберут детали по VIN или модели авто. Предлагаем на выбор оригинал или аналоги. </p>
                            <p className={styles.mobile}>Специалисты подберут детали по VIN или модели авто. Предлагаем выбор: оригинал или аналоги. </p>
                        </div>
                        <div className={styles.main_left_item}>
                            <h6>Гарантия на товар</h6>
                            <p>Гарантируем соответствие и надежность каждой детали. Быстрая процедура возврата или замены.</p>
                            <p className={styles.mobile}>Гарантируем надежность и качество каждой детали. Быстро производим процедуру возврата или замены.</p>
                        </div>
                    </article>
                    <article className={styles.main_right}>
                        <div className={styles.image_container}>
                            <Image
                                className={styles.image_container_img}
                                src="/service_photo.png"
                                alt='wrench guy photo'
                                fill
                            />
                        </div>
                        <div className={styles.description}>
                            <div>
                                <h6>Квалифицированные специалисты</h6>
                                <h6 className={styles.mobile}>Cпециалисты</h6>
                                <p>Консультация, подробный анализ, подбор деталей с учетом специфики вашего транспортного средства.</p>
                            </div>
                            <a>Обратиться</a>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}

export default Services