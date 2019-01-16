import React, {Component} from 'react';

class NewRoomForm extends Component {
    state = {
        roomName: ''
    }

    handleChange = (e) => {
        this.setState({
            roomName: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createRoom(this.state.roomName)
        this.setState({ roomName: ''})
    }

    render(){
    return (
        <div className="new-room-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text" 
                        value={this.state.roomName}
                        placeholder="Create a Room" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
    );
  }  
};

export default NewRoomForm;