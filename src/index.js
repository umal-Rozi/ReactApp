import {createRoot} from 'react-dom/client'; 
import App from './App';
// import { isValidElement, useState, useEffect  } from 'react'; // as label lo isticmalo

// jsx javascript framework using in laysku dhx qoro
// html io javascrptida.

// let years =2023;
// let greeting=
// <div>
//     <h1>Tittle</h1>
//     <p style={{
//         backgroundColor: "yellow",
//         padding: "10px",
//         fontSize: 40
//         }}>  Hello Gugs {years}!</p>
//     <input type="text" placeholder='enter your name'></input>
// </div>
// // waa in style sidaa u isticmashaa.

// function Header(props) { // read only weyeh
//     return  <h1>Hello {props.user} </h1>;
// };
// function Footer(props) {
//     return <footer> All Right {props.year} </footer>;
// };

// const layout =(props) =>{
//     return <div style={{backgroundColor:"green"
//     }}>
//         {props.children} 
//     </div>;
// }

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//     <div>
//         <Header user="umal_roze"/>
//         <Footer year="2023"/>
//     </div>
// );

// root.render(
//     <layout>
//         <Header user="umal_roze"/>
//         <Footer year="2023"/>
//     </layout>
// );



// component like function oo kleh weyeh.



// props = properties wax oo so basaysid weyeh.


    
// list of developer is lla so daabacaa la rabaa

// const App = () => { 
//     const developers = ["umal","moha",
//     "ali","ayudha"];

//     const handlechange = (event) => {
//         console.log(event.target.value);
//     }

//     return (
//         <>
//         {developers.map((developer, index) => (
//             <Developer developer={developer} key=
//             {index} />
//         ))}
//         <input 
//         type="text" 
//         placeholder="developer"
//         onChange={handlechange}
//     />
//       </>

//    );   
// };

// const Developer = (props) =>{
//     const handkerclick =() =>{
//         console.log(props.developer);
//     };
//     return <li onClick={handkerclick}>{props.developer}
//     </li>;
// };
  
// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//     <App /> 
// );
    



// new day shaashda laga soo saryo. 

// const App = () => { 

//    const devloperstate=  useState("umal");
//    // laba arin buu so celinyaa ka value markaad u isticamshid
//    //1 value of  the state
//    // 2 seter of the state values or change of the state 
 
//    const[developervalue,setdevlopervalue]=
//    useState("moha");
// //  let developervalue= devloperstate[0];
// //  let setdevlopervalue= devloperstate[1];
    
//     let values ="";
//     const handlechange = (event) => {
//         console.log(event.target.value);
//         setdevlopervalue(event.target.value);
//     };

//     return (
//         <>
//         <input 
//         type="text" 
//         placeholder="developer"
//         onChange={handlechange}
        
//     />
//     <p> {developervalue}</p>
//       </>

//    );   
// };
// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//     <App /> 
// );


// action o the button
// set value


// const App = () => { 

//     const devloperstate=  useState("umal");
//     // laba arin buu so celinyaa ka value markaad u isticamshid
//     //1 value of  the state
//     // 2 seter of the state values or change of the state 
  
//     const[developervalue,setdevlopervalue]=
//     useState("moha");
//  //  let developervalue= devloperstate[0];
//  //  let setdevlopervalue= devloperstate[1];
 
 
//  const [natinality , setnatinaltity] = 
//  useState ("somaliland");

//  const [age, setage] =useState ("0");
     
//      let values ="";
//      const handlechange = (event) => {
//          console.log(event.target.value);
//          setdevlopervalue(event.target.value);
//      };
 
//      return (
//     <>
//          {/* <input 
//          type="text" 
//          placeholder="developer"
//          onChange={handlechange} */}
//          <div>
            
//          <button onClick={()=>
//          setnatinaltity("somalia")}> Change 
//          Nationaltiy </button>
//          </div>
//          <input type="Number" 
//          onChange={(event) =>
//            setage(event.target.value) }
//           />
//         <p>
//             My age is: {age}
//         </p>
//         <p> my Nationaltiy is : 
//         {natinality}</p>
//     </>
 
//     );   
//  };
//  const container = document.getElementById("root");
//  const root = createRoot(container);
 
//  root.render(
//      <App /> 
//  );


// 

// const App = () => { 

//     const devloperstate=  useState("umal");
//     // laba arin buu so celinyaa ka value markaad u isticamshid
//     //1 value of  the state
//     // 2 seter of the state values or change of the state 
  
//     const[developer, setdeveloper] = useState({
//         name: "",
//         natinality: "",
//         age: "",
//     })
//  //  let developervalue= devloperstate[0];
//  //  let setdevlopervalue= devloperstate[1];
//     useEffect(() => {
//       document.title = developer.name;
//     } ,[developer.name]);

//  };
 
//  const [natinality , setnatinaltity] = 
//  useState ("somaliland");

//  const [age, setage] =useState ("0");
//  let name = "";
     
//      let values ="";
//      const handlechange = (event) => {
//          console.log(event.target.value);
//         setdeveloper(event.target.value);
         
         
    
 
//      return (
//     <>
//          {/* <input 
//          type="text" 
//          placeholder="developer"
//          onChange={handlechange} */}
//          <div>
            
//          <button onClick={()=>
//          setnatinaltity("somalia")}> Change 
//          Nationaltiy </button>
//          </div>
//          <input type="Number" 
//          onChange={(event) =>
//            setage(event.target.value) }
//           />

//           <input  type="text"
//           onChange={(event) => setdevloper ({
//             ...developer, name: event.target.value})}
//           />
          
//         <p>
//             My age is: {age}
//         </p>
//         <p> my Nationaltiy is : 
//         {natinality}</p>
//     </>
 
//     );   
//  };
//  const container = document.getElementById("root");
//  const root = createRoot(container);
 
//  root.render(
//      <App /> 
//  );



 // use effects to create effects dibada ka imanya 


 // API function
//     const endPoint = "http://jsonplaceholder.typicode.com/posts/1";
//     const App = () => {

//         const [post, setposts] =useState(null);
//         const [loading, setloading] = useState(false);

//         useEffect(() => {
//             // fetch(endPoint)
//             //   .then(response => response.json())
//             //   .then(data => setposts(data));

//             // other way 
//         const getposts =async() =>{
//             setloading(true);
//             const response = await fetch(endPoint);
//             const data  = await response.json();
//             setposts(data);
//             setloading(false);

//         }
//         getposts();
              

//     }, []);

//     if (loading) return <h1> Loading...</h1>;

//     return(

//         <>
//         <h1>{post?.title}</h1>
//         <p>{post?.body}</p>  
//            {console.log(post?.title)}

//         </>
//     );
// };  

//     const container = document.getElementById("root");
//      const root = createRoot(container);
     
//      root.render(
//          <App /> 
//      );


     // assigments....
     // list of all data in shaashda ka so wada baxan. 




    
     const container = document.getElementById("root");
     const root = createRoot(container);
     root.render(
        <App />
     );