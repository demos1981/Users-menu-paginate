import styles from '../src/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


 const UsersPage = ({users}) => {
  
  return (
 <>
   
    <div className={styles.usersCards}>
      <div className={styles.userList}>
      {users.map((user,i) => (
       
        <div key={user.id}className={styles.cardBody}>
        <div className={styles.imageBlock}>
        <Image
        src={user.image}
        width={100}
        height={100}
        alt='preview'
        />
        </div>
         <Link className={styles.usersName} href={`/users/${user.id}`}>
        <p>{user.firstName}<br></br>{user.lastName}</p>
        </Link>
        </div>
        
      )
      )}
     </div>
    </div>
    </>
  )
      }

export default UsersPage;