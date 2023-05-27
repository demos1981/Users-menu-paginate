import Heading from "./Heading";
import styles from "../src/styles/Home.module.css";
import Navigate from "./Paginate";

const Header=() =>(
    <>
    <header>
      
       
       <div className={styles.searchBlock}>
          <input className={styles.search} type="text" placeholder="search"></input>
       </div>
    </header>

    </>
  );
  export default Header;