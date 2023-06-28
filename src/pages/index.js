
import { USERS_ALL } from "../../components/api/api";
import UsersPage from "../../components/UsersPage";
import Paginate from "../../components/Paginate";
import { useState } from "react";
import { pagination } from "../../components/Paginate";



export const getStaticProps = async () => {
  const res =await fetch(USERS_ALL);
  const data = await res.json();


 if(!data){
  return{
    notFound:true,
  }
 }

  return {
      props:
      {users:data},
  }
};



export default function Home({users}) {
 const [value,setValue] = useState('');
 const [currentPage, setCurrentPage] = useState(1);
 const pageSize = 10;

 const paginatedPosts = pagination(users.users, currentPage, pageSize);
 console.log(paginatedPosts);

 const filteredUsers = paginatedPosts.filter(user => {
  return user.firstName.toLowerCase().includes(value.toLowerCase())
})






 const onePageChange =(page)=>{
  setCurrentPage(page);
 }

  return(
    <>
   
    <UsersPage users={filteredUsers} setValue={setValue}/>
    <Paginate  users={users.users.length}
       currentPage={currentPage}
       pageSize={pageSize}
       onPageChange={onePageChange}
    />
   
    </>
);
};








