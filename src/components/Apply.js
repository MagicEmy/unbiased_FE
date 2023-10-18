import '../App.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Apply() {
	  
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [nickName, setNickName] = useState("")
	const [profile, setProfile] = useState("")
	const [cv, setCv] = useState(null)
	const [jobTitle, setJobTitle] = useState("Job title")
	const [companyName, setCompanyName] = useState("Company name")
	const [isNameActive, setIsNameActive] = useState(false)
	const [isEmailActive, setIsEmailActive] = useState(false)
	const [isNickName, setIsNickName] = useState(false)
	const [isProfile, setIsProfile] = useState(false)
	const [isCareer, setIsCareer] = useState(false)
	const [isWork, setIsWork] = useState(false)
	const [isSkills, setIsSkills] = useState(false)
	const [isCertificates, setIsCertificates] = useState(false)
	const [isEducation, setIsEducation] = useState(false)
	const [isAchivements, setIsAchivements] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	let {jobToken} = useParams()
	useEffect(() => {
		console.log(jobToken)
		axios.get(`https://localhost:3333/apply/${jobToken}`)
		.then(res => {
			console.log(res)
			setJobTitle(res.title) // adapt name to match backend
			setCompanyName(res.name) // adapt name to match backend
		})
		.catch(err => {
		setIsSuccess(false)
	})
	.catch(err => {
	setIsSuccess(false)	// for now don't set to false if upload fails - form 
})
	});

	function onFormSubmit(e){
		let formUpload={
			profile: profile,
		}
		axios.post(`https://localhost:3333/apply/form`, { formUpload })
				.then(res => {
					console.log(res)
					console.log(res.data)
				})
				.catch(err => {
				})
		};

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
		axios.post(`https://localhost:3333/apply`, { cvUpload }) // adapt url based on backend
		  		.then(res => {
		    		console.log(res)
		   			console.log(res.data)
				})
				.catch(err => {
				setIsSuccess(false)
				})
			};
	return (
		<div className="inner-contaOne">
		<div className="inner-container">
		<h2 className="apply-header">{jobTitle}</h2>
		<h2 className="apply-header2">{companyName}</h2>
		<form onSubmit={e => {onSubmit(e)}}>
		  <div className={`ID1_applicant input-containe ${isNameActive ? 'active' : ''}`}>
			<input
			  className="input-place"
			  type="text"
			  onFocus={() => setIsNameActive(true)}
			  onBlur={() => setIsNameActive(false)}
			  onChange={(e) => setName(e.target.value)}
			  required
			/>
			<label>Full name</label>
		  </div>
		  <div className={`ID2_applicant input-containe ${isEmailActive ? 'active' : ''}`}>
			<input
			  className="input-place"
			  type="text"
			  onFocus={() => setIsEmailActive(true)}
			  onBlur={() => setIsEmailActive(false)}
			  onChange={(e) => setEmail(e.target.value)}
			  required
			/>
			<label>E-mail</label>
		  </div>
		  <input type="file" accept="application/pdf" onChange={(e) => setCv(e.target.files[0])} required />
		  <button className="submit-button" type="submit">Submit</button>
		</form>
	</div>
		{isSuccess ? <h1></h1> :
		<div className="inner-container">
		<form>
			<div className={`ID3_applicant input-containe ${isNickName ? 'active' : ''}`}>
				<input
				className="input-place"
				type="text"
				onFocus={() => setIsNickName(true)}
				onBlur={() => setIsNickName(false)}
				onChange={(e) => setNickName(e.target.value)}
				/>
				<label>Nick name</label>
			</div>
		</form>
		</div>}
	 </div>
  );
}

export default Apply;
