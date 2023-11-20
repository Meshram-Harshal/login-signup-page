import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import axios

function Registerscreen() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };

      // Make a POST request to your backend
      axios.post('http://localhost:3001/register', user)
        .then(response => {
          console.log(response.data); // Log the response from the backend
          // Handle successful registration (e.g., show a success message to the user)
        })
        .catch(error => {
          console.error('Error registering user:', error);
          // Handle registration error (e.g., show an error message to the user)
        });
    } else {
      alert('Passwords do not match');
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <input type="text" className="form-control" placeholder='name'
      value={name} onChange={(e)=>{setname(e.target.value)}}/>
      <br/>
      <input type="text" className="form-control" placeholder='email'
      value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      <br/>
      <input type="text" className="form-control" placeholder='password'
      value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
      <br/>
      <input type="text" className="form-control" placeholder='confirm password'
      value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>

      <button className='btn btn-primary' onClick={register}>Register</button>
    </div>
  );
}

export default Registerscreen;
