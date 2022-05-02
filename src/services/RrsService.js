// import axios from "axios";

// const RR_BASE_REST_API_URL = 'http://localhost:8080/rr/';

// class RrsService{

//     getAllRrs(){
//               return axios.get(RR_BASE_REST_API_URL);
//     }
    
//     createRr(rr){
//         return axios.post(RR_BASE_REST_API_URL,rr)
//     }   
//     getRrById(rrId){
//         return axios.get(RR_BASE_REST_API_URL + rrId)
//     } 
//     updateRr(rrId,rr){
//         return axios.put(RR_BASE_REST_API_URL+"update/"+rrId,rr)
//     } 
    
//     deleteRr(rrId){
//         return axios.delete(RR_BASE_REST_API_URL+rrId)
//     }

             
// }

// export default new RrsService();




import axios from "axios";

export async function AxiosRequest(url,method,headers,params) {

    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{},
        timeout:1000
    });
}

const GetApiDetails = ()=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/rr/","GET",headers,{})
};
const PostApiDetails = (data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest("http://localhost:8080/rr/","POST",headers,data)
};
const UpdateApiDetails = (id,data)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/rr/"+"update/"+id,
        "PUT",
        headers,
        data)
};
const GetDetailsById = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
    "http://localhost:8080/rr/"+id,
    "GET",
    headers,
    {})
};
const DeleteApiDetails = (id)=>{
    const headers={
       'Content-Type' : 'application/json',
    }
    return AxiosRequest(
        "http://localhost:8080/rr/"+id,
        "DELETE",
        headers,
        {})
};
export {GetApiDetails,PostApiDetails,UpdateApiDetails,GetDetailsById,DeleteApiDetails};
