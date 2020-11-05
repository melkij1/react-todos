import React, {Component} from 'react'

export default class PostListItem extends Component {
  
  render() {
    const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
    let classNames = 'list-group-item app-list-item d-flex justify-content-between'
    if(important){
      classNames += ' important';
    }
    if(like){
      classNames += ' like';
    }
    return (
      <li className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
            className="btn-star btn-sm" 
            type="button"
            onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button 
            className="btn-trash btn-sm" 
            type="button"
            onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    )
  }
}
