import '../App.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function Apply() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [cv, setCv] = useState(null)
	let {jobToken} = useParams()
	useEffect(() => {
		console.log(jobToken)
	  });
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
	  <input type="file" >
	  </input>
	  <button>Upload CV</button>
	  <button>Submit</button>
    </div>
  );
}

export default Apply;
