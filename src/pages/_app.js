

import Layout from '../../components/Layout';
import styles from '../styles/Home.module.css';


const MyApp=({ Component, pageProps })=>(
  
  <main>
 
    <Component {...pageProps} />
  
  </main>

   
);

export default MyApp;