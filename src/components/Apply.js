import '../App.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Apply() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [cv, setCv] = useState(null)
	const [jobTitle, setJobTitle] = useState("Job title")
	const [companyName, setCompanyName] = useState("Company name")
	let {jobToken} = useParams()
	useEffect(() => {
		console.log(jobToken)
		// axios.get(`api/get/${jobToken}`)
		// .then(res => {
		//	setJobTitle(res.title)
		//	setCompanyName(res.name)
		// })


		
	});

	function onSubmit(e){
		e.preventDefault();
	if (name == "" || email == "" || cv == null)
	{
		console.log("please fill in all the fields")
	}
		console.log(cv.size)
		if(cv.size/1024 > 5120){
			console.log("file too big")
			return
		}
		console.log("file was not too big")
		let cvUpload={
			name: name,
			email: email,
			cv: cv
		}
		// axios.post(`https://jsonplaceholder.typicode.com/users`, { cvUpload })
		//   		.then(res => {
		//     		console.log(res);
		//    			console.log(res.data);
		//   });
	};
	return (
    <div className="inner-container">
     <h1>Apply</h1>
	 <h2>{companyName}</h2>
	 <h2>{jobTitle}</h2>
	 <form onSubmit={e => {onSubmit(e)}}>
	 	<div className="ID1_applicant input-containe">
			<label>Full name</label>
			<input className="input-place" type="text" onChange={e => setName(e.target.value)} required />
			{/* <input type="text" placeholder="Full name" onChange={e => setName(e.target.value)}/> */}
		</div>
		<div className="ID2_applicant input-containe">
		<label>E-mail</label>
			<input className="input-place" type="text" onChange={e => setEmail(e.target.value)} required/>
		</div>
		<input type="file" accept="application/pdf" onChange={e =>setCv(e.target.files[0])} required/>
		<button type="submit" value="Submit">Submit</button>
	 </form>
    </div>
  );
}

export default Apply;
