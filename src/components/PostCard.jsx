import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({
    $id, title, featuredImage
}) {
    return (
        <Link to={`/post/${$id}`} className='w-full'>
            <div className='rounded-xl w-full p-4 bg-gray-100'>
                <div className='justify-center w-full mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl' />
                </div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
