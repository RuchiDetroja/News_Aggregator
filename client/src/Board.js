import { useParams } from 'react-router-dom';
import BoardHeader from './BoardHeader.js';
import Postform from './Postform.js';
import PostsListing from './PostsListing.js';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { CommunityContext } from './CommunityContext.js';

function Board(){
    const {community:communityFromUrl}=useParams();
    const {setCommunity} = useContext(CommunityContext);

    useEffect(()=>{
        setCommunity(communityFromUrl);
    },[communityFromUrl]);
    return (
        <div>
            <BoardHeader />
            <Postform />
            <PostsListing />
        </div>
    );
}

export default Board;