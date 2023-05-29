import styles from '../src/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


 const UsersPage = ({users,setValue}) => {
  
  return (
 <>
      <header>  
          <div className={styles.searchBlock}>
              <input className={styles.search}
              type="text"
                placeholder="search"
                onChange={(event)=>setValue(event.target.value)}
                ></input>
          </div>
      </header>
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