import axios from 'axios';
import Post from './Post.js';
import CommunityContent from './CommunityContent.js';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function SearchResultsPage(props){
    const URL = window.location.href.split('/');
    const text= URL[URL.length-1];
    const [comments, setComments] = useState([]);
    const [communities,setCommunities] =  useState([]);

    useEffect(() => {
        axios.get('/search?phrase='+text, { withCredentials: true }).then(response =>{ 
            setComments(response.data.comments);
            setCommunities(response.data.communities);
        });
    }, []);

    return (
        <div className="bg-reddit_dark">
            {communities.map(community => (
                <CommunityContent {...community}/>
            ))};
            {comments.map(comment => (
                <Post {...comment} />
            ))}
        </div>
    );
}

export default SearchResultsPage;