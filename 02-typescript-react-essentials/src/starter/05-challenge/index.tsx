type BasicProps={
    type:'Basic';
    name:string;
    
}
type AdvancedProps={
    type:'Advanced';
    name:string;
    email:string;
    
}
type ProfileProps=BasicProps|AdvancedProps;

function Component(props:ProfileProps) {

  if(props.type==='Basic'){
    return (
    <div>
      <h1>React & Typescript</h1>
      <h2 style= {{color:'red'}}> User:{props.name}</h2>
    </div>
  );
  }

  if(props.type==='Advanced'){
  return (
    <div>
      <h1>React & Typescript</h1>
      <h2 style= {{color:'blue'}}> User:{props.name}</h2>
      <h2 style= {{color:'blue'}}> Email:{props.email}</h2>
    </div>
  );
}
}
export default Component;
