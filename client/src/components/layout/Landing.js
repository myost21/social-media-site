import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroImage from '../../img/hero-img.svg';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Fragment>
			<section className="hero">
				<div className="landing">
					<div className="landing-content">
						<h1 className="x-large">QueueOverfill</h1>
						<p>
							Create a new QueueOverfill profile, share posts and get help
							from other psuedo-developers
						</p>
						<Link className="btn btn-primary" to="/login">
							Get Started
						</Link>
					</div>
					<div className="leading-img">
						<img src={HeroImage} alt="" />
					</div>
				</div>
			</section>

			<section className="block container">
				<h1>How to get started</h1>

				<p>
					<strong>1 </strong>
					Customize your pseudo developer profile. Click your profile image in the top
					right corner, then select the gear icon to make your profile
					uniquely yours.
				</p>
				<p>
					<strong>2 </strong>
					Explore fellow psuedo developers and posts.
				</p>
				<p>
					<strong>3 </strong>
					Like the posts you like to share or troll other people by telling that they do not
					know what they are talking about.
				</p>
				<p>
					<strong>4 </strong>
					Reply to a question in an existing thread or ask a question
					by creating a new topic.  Be sure that you add some snark about how it doesn't follow
					standards that a random person on Twitter told you.
				</p>
			</section>

			<section className="container">
				<h1 className="large">What is QueueOverfill?</h1>

				<p>
				QueueOverfill is a community for growing pseudo developers who read a thing and then decided
				that they knew everything.
				</p>

			</section>
		</Fragment>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
