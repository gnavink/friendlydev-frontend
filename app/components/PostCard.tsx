import type { Post } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: { post : Post } ) => {
    return (  
        <article className="bg-gray-800 p-6 rounded-lg shadow mb-4">                   
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                        {post.title}
                    </h3>
                    <p className="text-sm text-blue-300 mb-2">
                        {new Date(post.date).toDateString()}
                    </p>
                    {post.image && 
                     <img src={post.image} alt={post.title} 
                          className="w-full h-48 object-cover rounded mb-4"  
                     />
                    }
                    <p className="text-sm text-blue-300 mb-2">
                        {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`}
                        className="text-sm text-blue-300 hover:underline" >
                        Read more         
                    </Link>
        </article>

    );
}
 
export default PostCard;