import React from 'react';


class List extends React.Component {
    render() {
      const { todos, onTodoClick} = this.props;
      return (
        <ul className='list-style'>
          {
            todos.map((item, index) =>
            <li key={index}>
              <div className="outer-div">
                <div className="item-checkbox">
                  <input type="checkbox" checked={item.checked}
                    onChange={() => onTodoClick(item)} />
                  </div>
                  <div className="item-text">
                    <span style={checkboxStyle(item.checked)}>{item.value}</span>
                  </div>
                </div>
                <br />
            </li>
          )}
        </ul>
      )}
    }
  
  function checkboxStyle(checked) {
    return {
        //textDecoration: checked? 'line-through' : 'none',
      };
  }
  
  export default List;