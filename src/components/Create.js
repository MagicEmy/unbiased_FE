import '../App.css';

function onSubmit(){

}

function Create() {
  return (
    <div className="App">
      <h1>Create application</h1>
	  <form onSubmit={e => {handleSubmit(e)}}>
	  <div className="ID1">
	  	<input type="text" placeholder="Company name"/>
	  </div>
	  <div className="ID2">
	  	<input type="text" placeholder="Job title"/>
	  </div>
	  <div className="ID3">
	  <input type="text" placeholder="Email HR-manager"/>
	  </div>
	  <button onClick={onsubmit}>Submit</button>
	  </form>
    </div>
  );
}

export default Create;
