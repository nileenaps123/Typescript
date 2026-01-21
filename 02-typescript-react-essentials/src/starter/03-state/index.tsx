import {useState} from 'react';

function Component() {
  type link={
    id:number;
    url:string;
    text:string;
  }
  const navLink:link[]=[{
    id:1,
    url:'some url',
    text:'some text'
  },
    {
    id:2,
    url:'some url',
    text:'some text'
  },
  {
    id:3,
    url:'some url',
    text:'some text'
  }

]
  const[text,setText]=useState('hello');
  const[val,setVal]=useState(10);
  const [list,setList]=useState<string[]>([]);
  const [link,setLink]=useState(navLink);
  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={()=>{
          setVal(100)
          setList(['hello','world'])
          setLink([...link,{id:4,url:"bnn",text:"mmkkk"}])
        }}
        >
          Click Me
          <p>{val}</p>
        </button>
    </div>
  );
}
export default Component;
