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

	function onSubmit(e){
		e.preventDefault();
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
	};
	return (
    <div className="App">
     <h1>Apply</h1>
	 <h2>Company name</h2>
	 <h2>Job title</h2>
	 <form onSubmit={e => {onSubmit(e)}}>
		<div className="ID1_applicant">
			<input type="text" placeholder="Full name" onChange={e => setName(e.target.value)}/>
		</div>
		<div className="ID2_applicant">
			<input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
		</div>
		<input type="file" accept="application/pdf" onChange={e =>setCv(e.target.files[0])}/>
		<button type="submit" value="Submit">Submit</button>
	 </form>
    </div>
  );
}

export default Apply;
