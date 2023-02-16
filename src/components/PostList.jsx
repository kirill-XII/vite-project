import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import classes from './PostList.module.css'

const PostList = () => {
	const [enteredBody, setEnteredBody] = useState('')
	const [enteredAuthor, setEnteredAuthor] = useState('')

	function changeBodyHandler(event) {
		setEnteredBody(event.target.value)
	}
	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value)
	}
	return (
		<>
			<NewPost
				onBodyChange={changeBodyHandler}
				onAuthorChange={authorChangeHandler}
			/>
			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author='Max' body='show your' />
			</ul>
		</>
	)
}

export default PostList
