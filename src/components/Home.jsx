import React, { use } from 'react'
import "../styles/Home.css"
const Users=[
  {
    id: 1,
    name: "Alen James",
    email: "alen.james@example.com",
    age: 23,
    isActive: true,
    address: {
      city: "Kochi",
      country: "India"
    }
  },
  {
    id: 2,
    name: "Meera Thomas",
    email: "meera.thomas@example.com",
    age: 29,
    isActive: false,
    address: {
      city: "Mumbai",
      country: "India"
    }
  },
  {
    id: 3,
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    age: 35,
    isActive: true,
    address: {
      city: "Delhi",
      country: "India"
    }
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    age: 27,
    isActive: false,
    address: {
      city: "Bangalore",
      country: "India"
    }
  },
  {
    id: 5,
    name: "Karthik Reddy",
    email: "karthik.reddy@example.com",
    age: 31,
    isActive: true,
    address: {
      city: "Hyderabad",
      country: "India"
    }
  },
  {
    id: 6,
    name: "Priya Desai",
    email: "priya.desai@example.com",
    age: 25,
    isActive: true,
    address: {
      city: "Ahmedabad",
      country: "India"
    }
  },
  {
    id: 7,
    name: "Nikhil Joshi",
    email: "nikhil.joshi@example.com",
    age: 30,
    isActive: false,
    address: {
      city: "Pune",
      country: "India"
    }
  },
  {
    id: 8,
    name: "Ananya Verma",
    email: "ananya.verma@example.com",
    age: 22,
    isActive: true,
    address: {
      city: "Chennai",
      country: "India"
    }
  },
  {
    id: 9,
    name: "Raj Patel",
    email: "raj.patel@example.com",
    age: 40,
    isActive: true,
    address: {
      city: "Surat",
      country: "India"
    }
  },
  {
    id: 10,
    name: "Divya Nair",
    email: "divya.nair@example.com",
    age: 26,
    isActive: false,
    address: {
      city: "Trivandrum",
      country: "India"
    }
  },
  {
    id: 10,
    name: "Divya Nair",
    email: "divya.nair@example.com",
    age: 26,
    isActive: false,
    address: {
      city: "Trivandrum",
      country: "India"
    }
  },
  {
    id: 10,
    name: "Divya Nair",
    email: "divya.nair@example.com",
    age: 26,
    isActive: false,
    address: {
      city: "Trivandrum",
      country: "India"
    }
  },
];
const Home = (props) => {

  return (
    <>
    <h1 className='heading'>User List</h1>
    <p className='para'>i learned mapping </p>
   
    <div className="user_container">
        
       {Users.map((user)=>(
        <div className="boxes" key={Math.random()}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.age}</h2>
            <p>{user.isActive}</p>
            <p>{user.address.city}</p>
            <p>{user.address.country}</p>
        </div>
       )
    )}
    </div>
    <div className="user_container">
        <h1 className='heading' >I learned props</h1>
        <p className='para'>props are used to pass data from parent to child component</p>
        <div className="boxes">
               <h2>name:{props.name}</h2>
        <h2>age:{props.age}</h2>
        </div>
     
        
    </div>
     </>
  )
}

export default Home