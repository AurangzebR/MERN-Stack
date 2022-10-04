

import { useState } from 'react';
import './App.css';

function App() {
  const [form, setform] = useState({amount:0, description:"", date:""});

  function handleChange(e){
  setform({...form,[e.target.name]: e.target.value})}

  async function handleSubmit(e){
    e.preventDefault();
    
    const res = await fetch("http://localhost:4000/transaction",{
      method:"POST",
      body:form
    });
    console.log(res)
  }  

  return (
    <div >
      <form onSubmit={handleSubmit}> 
      <input type="number" name='amount' value={form.amount} onChange={handleChange} placeholder="Enter The Transaction Amount" />
     <input type="Text" name='description' onChange={handleChange}  placeholder="Description" />
     <input type="date" name='date' onChange={handleChange}   />
     <button type='submit'>Submit</button>

      </form>
    
    </div>
  );
}

export default App;
