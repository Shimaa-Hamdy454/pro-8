
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import "./components/Header.css";
import "./components/HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Footer from "./components/Footer";
import "./components/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserCard from "./components/UserCard";



 

function App() {
  const [users , setUsers] =useState([])
  const [search, setSearch] =useState("")
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${search}`)
    .then ((res) => setUsers (res.data))
    .catch((erorr)=>
       Swal.fire({
        icon: "error",
        title: "error 404...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      })
    );
  },[]);


  // ------------------------delete----------------------------

  const handelDelete =(id)=>{
    setUsers(users.filter(prev => prev.id !==id ))
  }



// --------------------------search------------------------------
  const filterUsers =users.filter(user =>
    user.name.toLowerCase().includes(search.toLocaleLowerCase())
  )
//  ------------------------------------------------------------

  return (
    <>
      <Header />
      <HomePage />
      <div className="div1">
        <h2 id="customers"><span className="H">Our</span>Customers</h2>
        <input type="text" placeholder="Search..."  value={search} onInput={(e)=>setSearch(e.target.value) } />
        
        <div className="main">
          {
            filterUsers.length > 0 ? (
              filterUsers.map ((post)=> (

                <UserCard
                id={post.id}
                name = {post.name}
                email={post.email}
                avatar={`https://i.pravatar.cc/150?img=${post.id}`}
                onDelete={handelDelete}
               />
            ))
          
           ):(
            <p>No clients found with this name</p>
           )
          }
       
        </div>
        
       
        
      </div>

      <Footer/>
    </>
  );
}

 export default App;
 

 
 

  