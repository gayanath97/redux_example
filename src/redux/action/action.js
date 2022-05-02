import { GET_DETAILS, POST_DETAILS ,UPDATE_DETAILS,DELETE_DETAILS} from "../type" 
import {GetApiDetails, PostApiDetails,UpdateApiDetails,DeleteApiDetails } from "../../services/RrsService";
const GetApiAction = () =>{

    return function(dispatach){
        return GetApiDetails()
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:GET_DETAILS,
                        payload:res.data.payload[0]
                    });
                  });
                 
    };
};
const PostApiAction = (request) =>{

    return function(dispatach){
        dispatach({
           type:POST_DETAILS,
           payload:false
        });
        return PostApiDetails(request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:POST_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const UpdateApiAction = (request,id) =>{

    return function(dispatach){
        dispatach({
           type:UPDATE_DETAILS,
           payload:false
        });
        return  UpdateApiDetails(id,request)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:UPDATE_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

const DeleteApiAction = (id) =>{

    return function(dispatach){
        dispatach({
           type:DELETE_DETAILS,
           payload:false
        });
        return DeleteApiDetails(id)
                  .then((res)=>{
                    console.log('Response Data is _____',res);
                    dispatach({
                        type:DELETE_DETAILS,
                        payload:true
                    });
                  });
                 
    };
};

export {GetApiAction,PostApiAction,UpdateApiAction,DeleteApiAction};