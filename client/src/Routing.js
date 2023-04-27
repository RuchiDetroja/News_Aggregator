import {BrowserRouter as Router, Navigate} from 'react-router-dom';
import Header from './Header.js';
import RoutingRoutes from './RoutingRoutes.js';
import AuthModal from './AuthModal.js';
import PostFormModal from './PostFormModal.js';
import {useContext, useEffect} from 'react';
import RedirectContext from './RedirectContext.js';
import { CommunityFormModal } from './CommunityFormModal.js';

function Routing(){ 
    const {redirect, setRedirect} = useContext(RedirectContext);
    useEffect(()=>{
        if(redirect ){
            setRedirect(false);
        }
    }, [redirect]);
    return(
        <Router>
            {redirect && (
                <Navigate to = {redirect} />
            )}
            {!redirect && (
                <>
                    <Header />
                    <RoutingRoutes />
                    <AuthModal />
                    <PostFormModal />
                    <CommunityFormModal/>
                </>
            )}
        </Router>
    );
}

export default Routing;