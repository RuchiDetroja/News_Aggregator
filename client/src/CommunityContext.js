import axios from "axios";
import { createContext, useState, useEffect} from "react";

export const CommunityContext = createContext({});

export function CommunityContextProvider({children}){
    const[show,setShow]=useState(false);
    const[community,setCommunity]=useState();
    const[communityInfo,setCommunityInfo]=useState({});

    useEffect(()=>{
        if(!community){
            return;
        }
        else{
            axios.get('/communities/'+ community)
            .then(Response=>{
                setCommunityInfo(Response.data);
            });
        }
    },[community]);
    return (
        <CommunityContext.Provider value={{show,setShow,community,setCommunity,...communityInfo}}>
            {children}
        </CommunityContext.Provider>
    );
}