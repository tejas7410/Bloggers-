import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config.js";
import { Container, PostCard } from '../components/index.js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
    }, []);

    const noPostsView = (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        {userData ? (
                            <h1 className="text-2xl font-bold text-gray-700">
                                No posts yet. <Link to="/add-post" className="text-blue-500 hover:underline">Be the first to post!</Link>
                            </h1>
                        ) : (
                            <h1 className="text-2xl font-bold text-gray-700">
                                <Link to="/login" className="text-blue-500 hover:underline">
                                    Login to read posts
                                </Link>
                            </h1>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );

    if (posts.length === 0) {
        return noPostsView;
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
