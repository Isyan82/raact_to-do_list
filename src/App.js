import { Component } from 'react';

import AppInfo from './components/app-info/app-info';
import TaskAddForm from './components/task-add-form/task-add-form';
import TaskList from './components/task-list/task-list';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.maxId = 0;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (title, description) => {
    const newItem = {
      title,
      description,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className="App">
        <AppInfo />
        <TaskAddForm onAdd={this.addItem} />
        <TaskList
          data={this.state.data}
          onDelete={this.deleteItem} />
      </div>
    )
  }
}

export default App;
