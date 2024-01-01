import React, { useState, useEffect, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { HiUser } from 'react-icons/hi';

const EditProfile = ({
	profile: { profile, loading },
	createProfile,
	getCurrentProfile,
	history,
}) => {
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		age: 0,
		chatgptuser: false,
		preferredos: '',
		preferrededitor: '',
		preferredtheme: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
	});

	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	useEffect(() => {
		getCurrentProfile();

		setFormData({
			company: loading || !profile.company ? '' : profile.company,
			website: loading || !profile.website ? '' : profile.website,
			location: loading || !profile.location ? '' : profile.location,
			status: loading || !profile.status ? '' : profile.status,
			skills: loading || !profile.skills ? '' : profile.skills.join(','),
			githubusername:
				loading || !profile.githubusername
					? ''
					: profile.githubusername,
			age : loading || !profile.age ? 0 : profile.age,
			chatgptuser: loading || !profile.chatgptuser,
			preferrededitor: loading || !profile.preferrededitor ? '': profile.preferrededitor,
			preferredos: loading || !profile.preferredos ? '' : profile.preferredos,
			preferredtheme: loading || !profile.preferredtheme ? '' : profile.preferredtheme,
			bio: loading || !profile.bio ? '' : profile.bio,
			twitter: loading || !profile.social ? '' : profile.social.twitter,
			facebook: loading || !profile.social ? '' : profile.social.facebook,
			linkedin: loading || !profile.social ? '' : profile.social.linkedin,
			youtube: loading || !profile.social ? '' : profile.social.youtube,
			instagram:
				loading || !profile.social ? '' : profile.social.instagram,
		});
	}, [loading, getCurrentProfile]);

	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		age,
		chatgptuser,
		preferredos,
		preferrededitor,
		preferredtheme,		
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history, true);
	};

	return (
		<Fragment>
			<h1 className="large text-primary">Create Your Profile</h1>
			<p className="lead">
				<HiUser className="react-icons" />{' '}
				<span>
					Let's get some information to make your profile stand out
				</span>
			</p>
			<small>* = required field</small>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<select
						name="status"
						value={status}
						onChange={(e) => onChange(e)}>
						<option value="0">* Select Professional Status</option>
						<option value="Developer">Developer</option>
						<option value="Frontend Developer">
							Frontend Developer
						</option>
						<option value="Backend Developer">
							Backend Developer
						</option>
						<option value="Full Stack Developer">
							Full Stack Developer
						</option>
						<option value="Junior Developer">
							Junior Developer
						</option>
						<option value="Senior Developer">
							Senior Developer
						</option>
						<option value="Devops Engineer">
							Devops Engineer{' '}
						</option>
						<option value="Manager">Manager</option>
						<option value="Student or Learning">
							Student or Learning
						</option>
						<option value="Instructor">
							Instructor or Teacher
						</option>
						<option value="Intern">Intern</option>
						<option value="Other">Other</option>
					</select>
					<small className="form-text">
						Give us an idea of where you are at in your career
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Company"
						name="company"
						value={company}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						Could be your own company or one you work for
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Website"
						name="website"
						value={website}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						Could be your own or a company website
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Location"
						name="location"
						value={location}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="* Skills"
						name="skills"
						value={skills}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						Please use comma separated values (eg.
						HTML,CSS,JavaScript,PHP)
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Github Username"
						name="githubusername"
						value={githubusername}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						If you want your latest repos and a Github link, include
						your username
					</small>
				</div>
				<div className="form-group">
					<input
						type="number"
						placeholder=""
						name="age"
						value={age}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						If you want your age known by strangers, put your age here.
					</small>
				</div>
				<div className="form-group">
					<input
						type="checkbox"
						placeholder=""
						name="chatgptuser"
						value={chatgptuser}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						Are you a ChatGPT user?
					</small>
				</div>
				<div className="form-group">
					<select
						name="preferredos"
						value={preferredos}
						onChange={(e) => onChange(e)}>
						<option value="0">* Select Preferred OS</option>
						<option value="Windows">Windows</option>
						<option value="MacOS">MacOS</option>
						<option value="Linux">Linux</option>
						<option value="Other">Other</option>
					</select>
					<small className="form-text">
						When you code, what OS to you prefer to use?
					</small>
				</div>
				<div className="form-group">
					<select
						name="preferrededitor"
						value={preferrededitor}
						onChange={(e) => onChange(e)}>
						<option value="0">* Select Preferred Code Editor</option>
						<option value="VSCode">Visual Studio Code</option>
						<option value="Atom">Atom</option>
						<option value="Sublime">Sublime</option>
						<option value="NotepadPlusPlus">Notepad++</option>
						<option value="VStudio">Visual Studio</option>
						<option value="Rider">JetBrains Rider</option>
						<option value="Other">Other</option>
					</select>
					<small className="form-text">
						What's your editor of choice?
					</small>
				</div>		
				<div className="form-group">
					<select
						name="preferredtheme"
						value={preferredtheme}
						onChange={(e) => onChange(e)}>
						<option value="0">* Select Preferred Theme</option>
						<option value="Light">Light</option>
						<option value="Dark">Dark</option>
						<option value="Custom">Custom</option>
					</select>
					<small className="form-text">
						What's your editor of choice?
					</small>
				</div>				
				<div className="form-group">
					<textarea
						placeholder="A short bio of yourself"
						name="bio"
						value={bio}
						maxLength="200"
						onChange={(e) => onChange(e)}></textarea>
					<small className="form-text">
						Tell us a little about yourself *Max 200 Characters
					</small>
				</div>

				<div className="my-2">
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type="button"
						className="btn btn-light">
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>

				{displaySocialInputs && (
					<Fragment>
						<div className="form-group social-input">
							<i className="fab fa-twitter fa-2x"></i>
							<input
								type="text"
								placeholder="Twitter URL"
								name="twitter"
								value={twitter}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-facebook fa-2x"></i>
							<input
								type="text"
								placeholder="Facebook URL"
								name="facebook"
								value={facebook}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-youtube fa-2x"></i>
							<input
								type="text"
								placeholder="YouTube URL"
								name="youtube"
								value={youtube}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-linkedin fa-2x"></i>
							<input
								type="text"
								placeholder="Linkedin URL"
								name="linkedin"
								value={linkedin}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-instagram fa-2x"></i>
							<input
								type="text"
								placeholder="Instagram URL"
								name="instagram"
								value={instagram}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</Fragment>
				)}
				<input type="submit" className="btn btn-primary my-1" />
				<Link className="btn btn-light my-1" to="/dashboard">
					Go Back
				</Link>
			</form>
		</Fragment>
	);
};

EditProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditProfile),
);
