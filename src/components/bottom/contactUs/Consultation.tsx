import styles from './Consultation.module.scss'
import ConsultationForm from './ConsultationForm'
import YaMap from './YaMap'

const Consultation = () =>{

    return(
        <>
            <section className={styles.consultation}>
                <main className={styles.consultation_centered} id='consultation'>
                    <article className={styles.consultation_centered_left}>
                        <ConsultationForm/>
                    </article>
                    <article className={styles.consultation_centered_right}>
                        <a>г. Одинцово, Можайское шоссе 14В</a>
                        <div className={styles.map_wraper}>
                            <YaMap center={[55.751347, 37.890873]} zoom={16}/>
                        </div>
                    </article>
                </main>
            </section>
        </>
    )
}
export default Consultation