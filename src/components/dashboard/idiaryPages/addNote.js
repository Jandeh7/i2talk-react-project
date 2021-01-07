import React, {Component} from 'react';
import Button1 from '../dashboardComponents/button1';
import Button2 from '../dashboardComponents/button2';
import { AddNote } from '../../../actions/idiaryActions';
import { connect } from 'react-redux';
import TextArea from "../dashboardComponents/textArea"; 

class AddNotes extends Component{
	state={
		message: "",
		errors:{}
	}

	submitNote=(newNote)=>{
		const { message }= this.state
		//ERROR CHECKING
		if(message===""){
			this.setState({
				errors:{message: "Input a valid note or click cancel"} 
			});
			document.getElementById("error").style.display="inline-block"
			return;
		}

		//NEW NOTE OBJECT
		newNote={
			id: new Date(),
			message: message,
			time: new Date().toLocaleString()
		}

		this.props.AddNote(newNote)

		//CLEAR DETAILS IN THE FORM INPUT
		this.setState({
			message:"",
			errors:{} 
		});
		this.props.history.push('/dashboard/idiary')
	}

	onChange=(e)=>{

	    var autoExpand = function (field) {

	    // Reset field height
	    field.style.height = 'inherit';

	    // Calculate the height
	    var height = field.scrollHeight + 5
	                 
	    field.style.height = height + 'px';

	    };

	    document.addEventListener('input', function (event) {
	      if (event.target.tagName.toLowerCase() !== 'textarea') return;
	      autoExpand(event.target);
	    }, false);
		 

		this.setState({
			[e.target.name]: e.target.value,
			errors:{}
		});
		document.getElementById("error").style.display="none"
	}

	render(){
		const {message, errors}= this.state
		//const{newNote}
		return (
			<div className="addNew">
				<p style={{color:'red', textAlign:'center'}}><i id="error" className="fas fa-exclamation-circle"></i> &nbsp;{errors.message}</p>
				<TextArea 
				placeholder="Enter your new note ..." 
				name="message" 
				className="messageInput textScrollbar"
				onChange={this.onChange}
				value={message} />
				
				<div>
					<Button1 onClick={this.submitNote} text="Add" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>

		)
	}
	
}

export default connect(null, { AddNote })(AddNotes);