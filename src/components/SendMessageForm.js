import React, {Component} from 'react';

class SendMessageForm extends Component {
    state = { message: '' }
       
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render(){
    return (
        <form onSubmit={this.handleSubmit} className="send-message-form">
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and HIT Enter."
                    type="text" />
        </form>
    );
  }
}
export default SendMessageForm;