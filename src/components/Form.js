import React, {useState} from 'react';
import List from './List'; 

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [values, setValues] = useState({
    name:  "",
    email:  "",
    mobile:  ""
  });
  const [errormsg, setErrormsg] = useState();
  const [successmsg, setSuccessmsg] = useState();

  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }
  let userArr = [];
  const handleSubmit = () =>{
    
    const regEx= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setErrormsg("");
    if(values.name === ""){
      setErrormsg("Please enter your name");
    }else if(values.email === ""){
      setErrormsg("Please enter your email");
    }
    else if(!regEx.test(values.email)){
      setErrormsg("Please enter valid email address");
    }
    else if(values.mobile === ""){
      setErrormsg("Please enter your mobile");
    }else{
       userArr = [...userArr,values]
      localStorage.setItem("userdetails", JSON.stringify(userArr));  
      setSuccessmsg("Your data is submitted successfully!!")
      setValues({ name:  "",
          email:  "",
          mobile:  ""
      })
      setName("");
      setEmail("");
      setMobile("");
    }
  }

  return (
    <div className="App">
      <form>
        <label>Name*</label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <label>Email*</label>
        <input type="text" name="email" value={email} onChange={handleChange}/>
        <label>Mobile number*</label>
        <input type="text" name="mobile" value={mobile} onChange={handleChange}/>
        <p className="error_msg">{errormsg}</p>
        <button type="button"  onClick={handleSubmit}>Submit</button> 
      </form>
      <p className="">{successmsg}</p>
      <br/>
      <List userdata={userArr}/>
    </div>
  );
}

export default Form;
 