import { Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { GetApiAction,DeleteApiAction } from '../redux/action/action';

const RrDetails = () => {

const dispatch = useDispatch();
const responseData = useSelector(state=>state.reducer.details)
const isDeleteResponse = useSelector(state=>state.reducer.isDeleteResponse)


if(isDeleteResponse){
    alert("Your data has been deleted!")
    window.location.reload(false)
}

useEffect(()=>{
    dispatch(GetApiAction());
},[dispatch])
     

    return ( 

       <div>
        <Table striped borderd hover variant="light">
            <thead>
                <th>Rr Id</th>
                <th>Rr ExtensionNo</th>
                <th>Rr Customer</th>
                <th>Rr Location</th>
                <th>Rr Sta_tus</th>
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                  responseData ? 
                
                  responseData.map(
                        
                        (rr) => {
                            return( 
                        <tr key={rr.id}>
                               <td>{rr.id}</td>
                               <td>{rr.extensionNo}</td>
                               <td>{rr.customer}</td>
                               <td>{rr.location}</td>
                               <td>{rr.sta_tus}</td>
                               <td>
                               <Button variant="warning"> <Link to={`/edit-rr/${rr.id}`} >Update</Link></Button>
                              
                               <Button  onClick = {() => dispatch(DeleteApiAction(rr.id))}
                                    style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
                               </td>
                        </tr>
                            )
                         })  : null             
             }      
            </tbody>
        </Table>     
       </div>
     );
}
 
export default RrDetails;