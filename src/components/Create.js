import '../App.css';

function Create() {
  return (
    <div className="App">
      <h1>Create application</h1>
	  <input type="text" placeholder="Company name"/>
	  <input type="text" placeholder="Job title"/>
	  <button>Submit</button>
    </div>
  );
}

export default Create;
