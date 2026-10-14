type PostFilterSearchProps = {
    searchQuery: string
    onSearchChange: (value:string) => void
}

const PostFilter = ({searchQuery, onSearchChange}: PostFilterSearchProps) => {
    return ( 
        <div className="mb-6">
            <input type="text"
             value={searchQuery}
             placeholder="Seach Posts.."
             onChange={(e) => onSearchChange(e.target.value)}
             className="w-full px-y py-2 
             rounded-lg bg-gray-700 text-white border
             border-gray-700 focus:outline-none focus:ring-2
             focus:ring-blue-500"
            />
        </div>
     );
}
 
export default PostFilter;