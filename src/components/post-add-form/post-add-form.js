import React, {Component} from 'react'

export default class PostAddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.text !== ''){
      this.props.onAdd(this.state.text)
      this.setState({
        text: ''
      })
    }
  }
  render() {
    return (
      <form 
        onSubmit={this.onSubmit}
        className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
          value={this.state.text}
          onChange={this.onValueChange}
        />
        <button 
          type="submit" 
          className="btn btn-outline-secondary">Добавить</button>
      </form>
    )
  }
}

