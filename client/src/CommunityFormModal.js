import { useContext, useState } from "react";
import {CommunityContext} from "./CommunityContext";
import { Popup } from "./Popup";
import Input from './Input.js';
import Button from "./Button";
import axios from "axios";
import RedirectContext from "./RedirectContext";

export function CommunityFormModal(){
    const{show,setShow}=useContext(CommunityContext);
    const{setRedirect}=useContext(RedirectContext);
    const [name,setName]=useState('');
    const [slogan,setSlogan]=useState('');
    const [avatar,setAvatar]=useState('');
    const [cover,setCover]=useState('');

    if(!show){
        return null;
    }
    
    function create(){
        const data={name,slogan,avatar,cover};
        axios.post('/communities',data,{withCredentials:true}).then(()=>{
            setRedirect('/r/'+name); 
            setShow(false);
        })
    }

    return(
        <Popup open={show}  onClickOut={()=>setShow(false)}>
            
            <h1 className="text-2xl mb-5">Create a new subredit</h1>
            <Input value={name} 
                    onChange={ev=>setName(ev.target.value)}
                    placeholder={'Name'} className={"w-full mb-2"}/>        
            <Input value={slogan} 
                    onChange={ev=>setSlogan(ev.target.value)}
                    placeholder={'Slogan'} className="w-full mb-2"/>
            <Input value={avatar} 
                    onChange={ev=>setAvatar(ev.target.value)}
                    placeholder={'Avatar image url'} className="w-full mb-2"/>
            <Input value={cover} 
                    onChange={ev=>setCover(ev.target.value)}
                    placeholder={'Cover image url'} className="w-full mb-2"/> 
            
            <div className="text-right">
            <Button onClick={()=>setShow(false)} outline className={'px-4 py-2 mr-2'}>Cancel</Button>
            <Button onClick={()=>create()} className={'px-6 py-2'}>Create your subredit!</Button>
            </div>
        </Popup>
    );
}