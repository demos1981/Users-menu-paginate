
import styles from '../src/styles/Home.module.css';
import Image from 'next/image';




  const UserInfo = ({image,firstName,lastName,address,city}) =>{

 
     return(
      
      <div className={styles.userBlockBio}>
      <div></div>
         <div className={styles.userBio}>
         <div>
         <Image
         src={image}
         width={200}
         height={200}
         alt='preview'
         />
         </div>
         
         <div>Name--
       <span className={styles.details}>{firstName}</span>
       </div>
     
       <div>Last name--
       <span className={styles.details}>{lastName}</span>
       </div>
       <div>Address--
       <span className={styles.details}>{address}</span>
       </div>
       <div>City--
       <span className={styles.details}>{city}</span>
       </div>
     
             
          </div>
         </div>
        
     )
 };
 
 export default UserInfo;