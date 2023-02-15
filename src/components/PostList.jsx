import Post from './Post'
import classes from './PostList.module.css'

const PostList = () => {
	return (
		<ul className={classes.posts}>
			<Post author='Naira' body='hi my friend' />
			<Post author='Max' body='show your' />
		</ul>
	)
}

export default PostList
