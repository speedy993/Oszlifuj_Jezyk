import React from "react";
import { useParams } from "react-router-dom";


const Blog = () =>{

    const routeParams = useParams();

    return(

       <>
            <div>test</div>
            {console.log(routeParams)}
       </>

    )
}

export default Blog;

