import Link from "next/link";
import styles from '../src/styles/Home.module.css';
import { useRouter } from "next/router";




/*

const navigation = [
    {id:1,path:'/',},
    {id:2,path:'/2',},
    {id:3,path:'/3',},
    {id:4,path:'/4',},
    {id:5,path:'/5',},
    {id:6,path:'/6',},
    {id:7,path:'/7',},
    {id:8,path:'/8',},
    {id:9,path:'/9',},
    {id:10,path:'/10',},

  


]

const Navigate = () =>{
    const {pathname} = useRouter();
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.paginationLink}>
                  {navigation.map(({id,path})=>(
                  
                  <Link key={id} href={path} className={pathname === path ? styles.active: styles.links} >
                  <div className={styles.links}>
                    <div className={styles.linksNumbersStyles}> {id}
                  </div>
                  </div>
                  </Link>
                  

))}

                </div>

            </nav>
        </>
    )
};


export default Navigate;*/

export const pagination = (users, pageNumber, pageSize) => {
 
  const startIndex = (pageNumber - 1) * pageSize;
  return users.slice(startIndex, startIndex + pageSize);
 };



const Paginate=({users, pageSize, currentPage, onPageChange})=>{
  const pagesCount = Math.ceil(users / pageSize); // 100/10
  console.log(pagesCount)

 
  

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
 console.log(pages)
 
  return (
    <div>
     <ul className={styles.paginationBlock}>
       {pages.map((page) => (
         <li
           key={page}
           className={
             page === currentPage ? styles.active : styles.links
           }
         >
           <a className={styles.pageLink} onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
  );
 };
 

export default Paginate;