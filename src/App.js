import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const abc=e.target.dogsearch.value;
    console.log(abc);
  }
  return (
    <div className='container' >
      <div>
      <form onSubmit={handleSubmit} >
    <input className='search-bar' type="search" name='dogsearch' placeholder="Search" aria-label="Search"/>
    <button type="submit" className="btn btn-primary">Search</button>
  </form>
      </div>
    </div>
  );
}

export default App;
