enum ServerResponseStatus{
    Success=200,
    Error=500
}

Object.values(ServerResponseStatus).forEach(val=>{
    //if(typeof val==='number'){
        
    //console.log(val);
   // }

}

)

console.log(ServerResponseStatus);

interface ServerResponse{
    result:ServerResponseStatus;
    data:string[];
}

function getServerResponse():ServerResponse{
    return {
        result:ServerResponseStatus.Error,
        data:['first','second']


    }
}

const response:ServerResponse=getServerResponse();
console.log(response)



