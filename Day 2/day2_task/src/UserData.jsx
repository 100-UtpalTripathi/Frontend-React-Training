import React, { useEffect, useState } from 'react';
import Data from './data.json';

const UserData = () => {
    const [postsData, setPostsData] = useState({});
    const [postsCount, setPostsCount] = useState(0);

    useEffect(() => {
        setPostsData(Data);
        setPostsCount(Data.posts.length); // Directly use Data.posts.length
    }, []);

    return (
        <>
            <h1>Total Posts: {postsCount}</h1>
            {postsData.posts && postsData.posts.map(post => (
                <div key={post.id} className="card course-card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <p> 👍 {post.reactions.likes} &nbsp; 👎 {post.reactions.dislikes}</p>
                        {post.userId === 123 && ( // Check if userId is 123 (as a number)
                            <>
                                <button className="btn btn-primary">Edit</button> &nbsp; 
                                <button className="btn btn-danger">Delete</button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserData;
