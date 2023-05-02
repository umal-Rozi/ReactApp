import { useState, useRef } from "react";

const CreatePost = ({posts , setposts})  => {
  const [content, setcontent] = useState ("") ;
   const [image, setimage] = useState(null);


   const imageRef = useRef();
   const contentRef = useRef();

   const handlesubmit = (event) => {
    event.preventDefault();
    const newpost = { content, image };
    setposts([newpost,...posts]); 
    setcontent("");
    setimage(""); 
    imageRef.current.value = "";
    contentRef.current.focus();
  };

    return (
        <div>
            <h1>Create Post</h1>
            <form  onSubmit={handlesubmit} >
                <input type="text" 
                   placeholder="post Contanct"
                   onChange={(event)=> 
                   setcontent(event.target.value)}
                   value={content} 
                   ref={content}
                 />
                <input type="file" 
                   onChange={(event) =>
                    setimage(event.target.files[0])}
                    ref= {imageRef}
                 />
                <button type="submit">submit</button>
            </form>
            
        </div>
    );
};
export default CreatePost; 
