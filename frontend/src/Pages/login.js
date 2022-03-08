import React, { Component } from 'react';
import './signup.css';
import Form from 'react-bootstrap/Form'

import "bootstrap/dist/css/bootstrap.min.css";
    
class Login extends Component{
    state = {
        credentials :{
            username:'',
            password:''
        }
    }
    login =  event => {
        // alert(JSON.stringify(this.state.credentials))
        fetch("http://127.0.0.1:8000/auth/",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state.credentials)
        }).then(data => data.json()
        ).then( 
            data => {
                console.log(data);
                this.props.userLogin(data.token);
            }
        ).catch(error => console.error(error))
    }
    inputChanged = event => {
            const cred = this.state.credentials;
            cred[event.target.name] = event.target.value;
            this.setState({credentials:cred})
    }   
    render(){
  return (
     <>
     <div className='container'>
    <div className="signup">
      <h1>Login as user</h1>
      <Form className='form'>
          <input type="text" name='username' placeholder='username' value={this.state.credentials.username   } onChange={this.inputChanged} className='sinput'/><br />
          <input type="password" name='password' placeholder='Password' value={this.state.credentials.password   } onChange={this.inputChanged} className='sinput'/><br />
          <button type="button" className="btn btn-outline-dark" onClick={this.login}>Login</button>
        </Form>
    </div>
    <div className="signup">
      <h1>Login as client</h1>
      <Form className='form'>
          <input type="text" name='username' placeholder='Username' className='sinput' /><br />
          <input htmltype="password" name='password' placeholder=' password' className='sinput' /><br />
          
          <button type="button" className="btn btn-outline-dark" onClick={this.login}>Login</button>
        </Form>
    </div>
    
    </div>
    <div> <h3>Dont have an account?</h3><a href='/signup'>Signup</a></div>
    </>
  )
}
};

export default Login;