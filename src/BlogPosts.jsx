import { useEffect, useState } from "react";

const BlogPosts = () => {
    const [post, setPosts] = useState([]) // Declare a new state variable, which we'll call "post"
    const [error, setError] = useState(null); // Declare a new state variable, which we'll call "error"

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok) {
                    throw new Error ('Error: response.status + response.statusText');
                }
                const data = await response.json(); // convert the response data to json
                setPosts(data); // Update the state with the fetched posts
            } catch (error) {
                setError(error.message) // Update the state with the error message
            }
        };
        fetchPosts(); // Call the function to fetch the posts

    }, []) // The empty array means this effect will only run once

    return (
        <div>
            <h1>Blog Posts</h1>
            
        </div>
    )
}
export default BlogPosts;