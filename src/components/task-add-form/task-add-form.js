
import { Component } from 'react';

import './task-add-form.css';


class TaskAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		}
	}

	onValueChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	onSubmit = (evt) => {
		evt.preventDefault();
		this.props.onAdd(this.state.title, this.state.description);
		this.setState({
			title: '',
			description: ''
		})
	}


	render() {
		const { title, description } = this.state;
		return (

			<form className="add-form"
				onSubmit={this.onSubmit}
			>
				<div className="add-form__title">
					<label htmlFor="title">Название задачи</label>
					<input type="text"
						placeholder="Введите название задачи"
						name="title"
						id="title"
						value={title}
						onChange={this.onValueChange}
						required
					/>
				</div>

				<div className="add-form__description">
					<label htmlFor="description">Описание задачи</label>
					<textarea placeholder="Введите описание задачи"
						name="description"
						id="description"
						value={description}
						onChange={this.onValueChange}
						required>
					</textarea>
				</div>

				<button type="submit"
					className="add-form__button">Добавить
				</button>
			</form>

		)
	}

}

export default TaskAddForm