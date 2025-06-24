import Top from "./top/Top"
import styles from './Main.module.scss'
import Middle from "./middle/Middle"
import Bottom from "./bottom/Bottom"

const Main = () =>{
    return(
        <>
            <section className={styles.main}>
                <Top/>
                <Middle/>
                <Bottom/>
            </section> 
        </>
    )
}

export default Main