import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<p> Welcome to Home page. </p>
			<Link to="/about">
				<p> Go to the About page. </p>
			</Link>
		</div>
	);
}

export default Home;