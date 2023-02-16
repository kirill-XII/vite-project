import classes from './NewPost.module.css'

function NewPost(props) {
	debugger
	return (
		<form className={classes.form}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} onChange={props.onBodyChange} />
			</p>
			<p>
				<label>Your name</label>
				<input type='text' id='name' required onChange={props.onAuthorChange} />
			</p>
		</form>
	)
}

export default NewPost
