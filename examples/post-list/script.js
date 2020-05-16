const Post = ({ title, content }) => {
	const styles = {
		backgroundColor: 'beige',
		padding: '2em',
	};

	return (
		<li style={styles}>
			<h1>{title}</h1>
			<p>{content}</p>
		</li>
	);
};

const PostList = () => {
	const styles = {
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		maxWidth: '80%',
		margin: '4em auto 0',
	};

	return (
		<ul style={styles}>
			<Post title="First post!" content="This is my first post ever!" />
			<Post title="And another one" content="I'll try it again:)" />
			<Post title="Even a third one" content="I keep em going!" />
		</ul>
	);
};

function App() {
	return <PostList />;
}

const root = document.getElementById('postList');

ReactDOM.render(<App />, root);
