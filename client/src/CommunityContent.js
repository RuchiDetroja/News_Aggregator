import {Link} from 'react-router-dom';

function CommunityContent(props){
    const postClasses = "block bg-reddit_dark-brighter p-3 mx-6 border-2 border-reddit_border text-reddit_text rounded mb-2 border hover:border-white";
    return(
        <div>
                <Link to={'/r/'+props.name} className={postClasses}>
                    r/{props.name}
                </Link>
        </div>
    );
}

export default CommunityContent;