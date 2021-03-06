import React from 'react';
import { addSmurf, loadSmurfs } from '../actions';
import { connect } from 'react-redux';

class CreateSmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  componentWillReceiveProps() {
    this.props.loadSmurfs();
  }

  onChange = (event) => {
    let { name, value } = event.target;
    if (event.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className='create-smurf-container'>
        <div className='create-smurf-header'>Add Smurf</div>
        <form onSubmit={this.onSubmit} className='create-smurf'>
            <input onChange={this.onChange} type='text' placeholder='name' name='name' value={this.state.name} required='true' />
            <input onChange={this.onChange} type='number' placeholder='age' name='age' value={this.state.age} required='true' />
            <input onChange={this.onChange} type='number' placeholder='height' name='height' value={this.state.height} required='true' />
            <button type='submit'>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adding: state.adding,
    removed: state.removed,
    updated: state.updated,
  }
}

export default connect(mapStateToProps, { addSmurf, loadSmurfs })(CreateSmurfForm);