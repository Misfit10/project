import  { useEffect,useState} from 'react';
function App(){
  const [data,setData]=useState('');
  useEffect(() =>{
    fetch('/api/hello')
    .then(res=>res.json())
    .then(d => setData(d.message));
    }, []);
  return <h1>{data || "loading .."}</h1>;
}
export default App;
