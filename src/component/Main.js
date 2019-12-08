import React  from 'react';
import TodoList from './Todolist';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      term: ''
    };
  }

  handleChange = event => {
    this.setState({ term: event.target.value });
  }

  handleItemClick = ({ value, checked }) => {
    this.setState({
      items: this.state.items.map(item => item.value === value ? { value, checked: !checked } : item)
    });
  }

  onSubmit = event => {
    event.preventDefault();

    if (this.state.term.length > 0) {
      this.setState({
        term: '',
        items: [...this.state.items, { value: this.state.term, checked: false }]
      });
    }
  }
  render() {
    return (
      <div className="center">
       <h1 className="header" > TODO-LIST </h1>
       <div className='mainCenter'>
       <form className="App" onSubmit={this.onSubmit}>
          <input placeholder="add task" value={this.state.term} onChange={this.handleChange}
          className="inputField"/>
          <button>Submit</button>
        </form>
        <TodoList 
          onTodoClick={this.handleItemClick}
          todos={this.state.items}
        />
        <div className="footer-outer">
          <span className="footer">
            Number of completed items in an array:
            {this.state.items.filter(item => item.checked).length}
          </span>
        </div>
      </div>
    </div>
    );
  }
}

export default Main