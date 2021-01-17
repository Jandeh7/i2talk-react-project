import React, { Component } from 'react';
import Reminder from './Reminder';
// import Button1 from '../dashboardComponents/button1';
// import Button2 from '../dashboardComponents/button2';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReminders } from '../../../actions/ireminderActions'


class IreminderBody extends Component{

	componentDidMount(){
		this.props.getReminders()
	}

	render(){
		const { reminders } = this.props;
		console.log(reminders)
    
		return (
			<React.Fragment>
				<div className="ireminder-body scrollbar" id="ireminder-body">
					<h3>Reminder List</h3>
					{reminders.map((reminder) =>
						<Reminder key={reminder.ID} reminder={reminder}/>
					)}
		  	</div>
			</React.Fragment>
			

		)
	}
	
}

IreminderBody.propTypes={
	reminders: PropTypes.array.isRequired,
	getReminders: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	reminders: state.reminders.reminders
})

export default connect(mapStateToProps, { getReminders })(IreminderBody);