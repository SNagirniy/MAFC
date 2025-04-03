import PostPage from "@/components/pages/PostPage";




const Post = async({params})=> {
    const slug = (await params).slug;

    return <PostPage slug={slug}/>
};

export default Post;
