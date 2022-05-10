import TaskItem from "../task-item/task-item";
import './task-list.css';

const TaskList = ({ data, onDelete }) => {

	const elements = data.map(item => {
		return (
			<TaskItem
				key={item.id}
				{...item}
				onDelete={() => onDelete(item.id)} />
		)
	})

	return (
		<section className="task">
			<h3 >To Do List</h3>
			<ul className="task-list"
			>
				{elements}
			</ul>

		</section>
	)
}
export default TaskList;