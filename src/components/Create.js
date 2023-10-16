import '../App.css';

function Create() {
  return (
    <div className="App">
      <h1>Create application</h1>
	  <div className="ID1">
	  	<input type="text" placeholder="Company name"/>
	  </div>
	  <div className="ID2">
	  	<input type="text" placeholder="Job title"/>
	  </div>
	  <div className="ID3">
	  <input type="text" placeholder="Email HR-manager"/>
	  </div>
	  <button>Submit</button>
    </div>
  );
}

export default Create;
