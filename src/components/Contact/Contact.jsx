import s from "./Contact.module.css"

const Contact = ({ data: { id, name, number }, onDelete }) => {
	return (
		<div className={s.contact}>
			{/* TODO add icon */}
			<ul className={s.list}>
				<li className={s.field}>{name}</li>
				<li className={s.field}>{number}</li>
			</ul>
			<button className={s.btn} onClick={() => onDelete(id)}>
				Delete
			</button>
		</div>
	)
}

export default Contact
