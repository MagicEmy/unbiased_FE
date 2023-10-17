import '../App.css';
import {useState} from 'react'
import axios from 'axios';

function Create() {
	const[companyName, setCompanyName]=useState("");
	const[jobTitle, setJobTitle]=useState("");
	const[companyEmail, setCompanyEmail]=useState("");

	function onSubmit(e){
		e.preventDefault();
		let jobPost={
			companyName: companyName,
			jobTitle: jobTitle,
			companyEmail: companyEmail,
		};
	// 	axios.post(`https://jsonplaceholder.typicode.com/users`, { jobPost })
    //   		.then(res => {
    //     		console.log(res);
    //    			console.log(res.data);
    //   });
		console.log(jobPost);
	}

  return (
    <div className="App">
      <h1>Create application</h1>
	  <form onSubmit={e => {onSubmit(e)}}>
	  <div className="ID1">
	  	<input type="text" placeholder="Company name" onChange={e => setCompanyName(e.target.value)}/>
	  </div>
	  <div className="ID2">
	  	<input type="text" placeholder="Job title" onChange={e => setJobTitle(e.target.value)}/>
	  </div>
	  <div className="ID3">
	  <input type="text" placeholder="Email HR-manager" onChange={e => setCompanyEmail(e.target.value)}/>
	  </div>
	  <button type="submit" value="Submit">Submit</button>
	  </form>
    </div>
  );
}

export default Create;

// {} []