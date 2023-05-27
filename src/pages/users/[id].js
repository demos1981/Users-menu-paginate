import UserInfo from '../../../components/UserInfo';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';




export const  getStaticPaths = async () =>{
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    
    const paths = data.users.map(user =>{
        return{
            params:{id:user.id}
        }
    })

    return {
        paths:[],
        fallback: false,
    }
}

export const getStaticProps  = async (context) => {
    console.log(context)
    const id = context.params.id;

    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    return {
        props:{user:data},
    }
}

const Details = ({user}) =>{
   console.log(user);

    return(
     
    <UserInfo firstName={user.firstName} lastName={user.lastName} image={user.image} address={user.address.address} city={user.address.city}/>
       
    )
};

export default Details;