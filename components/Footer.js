import styles from "../src/styles/Home.module.css";
import Paginate from "./Paginate";

const Footer=() =>(
    <>
    <footer className={styles.footerPagination}>
      <div className={styles.paginationBlock}>
        <div className={styles.paginationBody}>
           <Paginate/>
        </div>
      </div>
    </footer>

    </>
  );
  export default Footer;