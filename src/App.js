import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";


 const App = () =>{
    const [user, setUser] = useState("umal");
    const [posts, setposts] = useState([]);

    useEffect (() => {
        document.title = user ?  `${user}'s feed `: "please login";
    }, [user]);

    if(!user)  return <Login setUser = {setUser}/>;

    return (
        <>
        <Header user ={ user} setUser ={setUser}/>
        < CreatePost posts={posts} setpost={setposts} />
        
            {
            posts.map(post => (
            <>
                <p>{post.conctent}</p>
                {post.image && <img src="{URL.CreateObjectURL(post.image)}" alt="" 
                style={{width: 100}}/>}
            </>
                
            ))
        }
     </>
        
    ); 
};

export default App;
