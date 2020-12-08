import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';


class SignUpForm extends Component {
  state = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cpassword: ''
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { fullname, username, email, password, cpassword } = this.state;

    // check for errors

    // if (username === ''){
    //   this.setState({errors: { username: 'Username is required' }});
    //   return;
    // }
    // if (password === ''){
    //   this.setState({errors: { password: 'Password is required' }});
    //   return;
    // }

    // const newContact = {
    //   username,
    //   password
    // }

    // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    // dispatch({ type: 'ADD_CONTACT', payload: res.data });
    
    this.setState({
      fullname: '',
      username: '',
      email: '',
      password: '',
      cpassword: ''
    });

    // this.props.history.push('/');
  };

  onChange = e => this.setState({[e.target.name] : e.target.value });

  render() {
    const { fullname, username, email, password, cpassword } = this.state;

    return (
    <React.Fragment>
      <div className="hero-modal-form">
        <div className ="wrapper">
          <div className ="title">Sign Up</div>
          {/* <form onSubmit={this.onSubmit.bind
            (this, dispatch)}> */}
          <form>
            <TextInputGroup 
              label="Full Name"
              name="fullname"
              // placeholder="Enter Name..."
              value={fullname}
              onChange={this.onChange}
              // error={errors.name}
            />
            <TextInputGroup 
              label="Username"
              name="username"
              // placeholder="Enter Name..."
              value={username}
              onChange={this.onChange}
              // error={errors.name}
            />
            <TextInputGroup 
              label="Email Address"
              name="email"
              // placeholder="Enter Name..."
              value={email}
              onChange={this.onChange}
              // error={errors.name}
            />
            <TextInputGroup 
              label="Password"
              name="password"
              type="password"
              // placeholder="Enter Email..."
              value={password}
              onChange={this.onChange}
              // error={errors.email}
            />
            <TextInputGroup 
              label="Confirm password"
              name="cpassword"
              type="cpassword"
              // placeholder="Enter Email..."
              value={cpassword}
              onChange={this.onChange}
              // error={errors.email}
            />

            <p><small>By clicking Sign Up, you agree to our <a href="./terms.html">Terms</a>, 
							<a href="./security&privacy.html">Privacy Policy</a>. 
							You may receive SMS notifications from us and can opt out at any time.</small>
						</p>
						
            <input type="submit" value ="Signup" className="login-btn" />

            <p>Already have an account? <a href="./index.html">Log In</a></p>
          </form>
        </div>

        <div className="close-icon">
            <i onClick = {this.props.hideForm} className="fas fa-times"></i>
        </div>

      </div>

        

    </React.Fragment>


        
     
    )
  }
}

export default SignUpForm;
