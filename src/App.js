import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const[dogbreed,setDogbreed]=useState([])
  const[error,setError]=useState()
  const handlebreedDog=(deta)=>{
    console.log(deta)
    if(deta?.status==='error'){
      setError(deta.message)
    }
    else{
      setDogbreed((deta.message).splice(0,10))
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const abc=e.target.dogsearch.value.replace(/\s/g, '');

      fetch(`https://dog.ceo/api/breed/${abc.toLowerCase()}/images`)
      .then(res=> res.json())
      // .then(data=>  console.log(data))
      .then(data=>  handlebreedDog(data))
      // .then(data=>  setDogbreed((data.message).splice(0,10)))
  
  }
  console.log(error)
  
 console.log(dogbreed) 
  return (
    <div className='container' >
      <div>
      <form onSubmit={handleSubmit} >
    <input className='search-bar' type="search" name='dogsearch' placeholder="Search" aria-label="Search"/>
    <button type="submit" className="btn btn-primary">Search</button>
  </form>
      </div>
      <section>
        {dogbreed.map(dog=>(
          <div>
            <img src={dog} alt='dogimage'/>
          </div>
        ))}
      </section>
      {error && error.length > 0 && (
        <h3>{error}</h3>
      )}
    </div>
  );
}

export default App;
