import { useState,useEffect } from "react";
import {useNavigate,useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { PostApiAction,UpdateApiAction } from '../redux/action/action';
import { GetDetailsById} from "../services/RrsService";

const RrForm = () => {
    const [extensionNo,setextensionNo]=useState("")
    const [customer,setcustomer]=useState("")
    const [location,setlocation]=useState("")
    const [sta_tus,setsta_tus]=useState("")

    const navigate = useNavigate();
    const {id} = useParams();

    const dispatach = useDispatch();

    const isResponse = useSelector(state=>state.reducer.isResponse)
    const isUpdateResponse = useSelector(state=>state.reducer.isUpdateResponse)
 
    const saveOrUpdateRr = (e)=>{

    e.preventDefault();
    const rr = {extensionNo, customer, location}
    
    if(id){
        dispatach(UpdateApiAction(rr,id));      
    }else{
        dispatach(PostApiAction(rr));    
    }
    }


    if(isUpdateResponse){
        alert("Your data has been updated!"); 
        navigate('/rr')
        window.location.reload(false);
    }
    
    if(isResponse){
        alert("Your response has been submitted!");
        navigate('/rr')
        window.location.reload(false);
    }  


    useEffect(() => {  
        GetDetailsById(id)
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setextensionNo(response.data.payload[0].extensionNo)
                    setcustomer(response.data.payload[0].customer)
                    setlocation(response.data.payload[0].location)
                    setsta_tus(response.data.payload[0].sta_tus)
                }
            )
            .catch(
                (error)=>{
                     console.log(error)
                }
            )   
    }, [])



    const title = ()=>{
        if(id){
                return <h2 >Update Rr</h2>
        }else{
               return <h2>Add Rr</h2>
        }
    }


    return ( 



         <div>
            
            {title()}
                
             
            <form >

             <div>
                                 <label > ExtensionNo :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter extensionNo"
                                     name = "extensionNo"
                                     value = {extensionNo}
                                     onChange = {(e) => setextensionNo(e.target.value)}
                                 >
                                 </input>
             </div>
             <div>
                                 <label > Customer :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter customer"
                                     name = "customer"
                                     value = {customer}
                                     onChange = {(e) => setcustomer(e.target.value)}
                                 >
                                 </input>
             </div>
             <div>
                                 <label > Location :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter location"
                                     name = "location"
                                     value = {location}
                                     onChange = {(e) => setlocation(e.target.value)}
                                 >
                                 </input>
             </div>
             
             
             <br / >
             <br / >

                  
            
        
             <div>
             <Button onClick={(e)=>{
                 
                 saveOrUpdateRr(e)}} variant='warning' size="lg">Submit</Button>
             </div>
             <br />
            
             
                 
             </form>

             


         </div>

     );
}
 
export default RrForm;


