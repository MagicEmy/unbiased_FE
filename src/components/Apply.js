import '../App.css';

function Apply() {
  return (
    <div className="App">
     <h1>Apply</h1>
	 <h2>Company name</h2>
	 <h2>Job title</h2>
	 <div className="ID1_applicant">
	  	<input type="text" placeholder="Full name"/>
	  </div>
	  <div className="ID2_applicant">
	  	<input type="text" placeholder="E-mail"/>
	  </div>
	  <button>Upload CV</button>
	  <button>Submit</button>
    </div>
  );
}

export default Apply;
