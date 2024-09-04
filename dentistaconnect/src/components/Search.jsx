import styles from "@/styles/search.module.css"

export default function Search (){
    return(
        <div className={styles.search}>
        <input type="text" placeholder="Search.."/>
        <button className={styles.buttonP}>
         AGENDAR
            </button>
        </div>

    );
}