import Link from "next/link";
import styles from '../src/styles/Home.module.css';







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
       
           <a className={styles.pageLink} onClick={() => onPageChange(page)}>
           <li
           key={page}
           className={
             page === currentPage ? styles.active : styles.links
           }
         >  {page}</li>
            
           </a>
        
       ))}
     </ul>
   </div>
  );
 };
 

export default Paginate;