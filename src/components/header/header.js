import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight, faBars, faSearch, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Images } from '../../assets/assets'
import './header.css'

export default function Header() {
	return (
		<header id="header">
			<div className="header-top d-flex justify-content-between align-items-center">
				<div className="image-holder">
					<img src={Images.profilePic} alt='' />
				</div>
				<strong className="logo">
					<Link to="/" className="d-inline-block align-top">
						<img className="img-fluid" src={Images.siteLogo} alt="" />
					</Link>
				</strong>
				<span className="icon-holder cursor-pointer">
					<FontAwesomeIcon icon={faBars} />
				</span>
			</div>
			<div className="header-middle d-flex flex-column">
				<div className="heading-search-row d-flex justify-content-between">
					<h1>Portfolio Dashboard</h1>
					<span className="search-icon cursor-pointer">
						<FontAwesomeIcon icon={faSearch} />
					</span>
				</div>
				<div className="d-flex flex-column">
					<Link to="/" className="btn btn-black d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon={faWandMagicSparkles} />
						<span className="mx-2">Ask AI Assitant</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
				<span className="search-text">E.g.: ...</span>
			</div>
			<div className="header-bottom">
				<ul className="list-unstyled continent-filter d-flex justify-content-between">
					<li className="d-flex justify-content-center transition cursor-pointer active">
						<div className="flag-holder">
							<img className="img-fluid" src={Images.flagWorld} alt='' />
						</div>
						All
					</li>
					<li className="d-flex justify-content-center transition cursor-pointer">
						<div className="flag-holder">
							<img className="img-fluid" src={Images.flagAustralia} alt='' />
						</div>
						Australia
					</li>
					<li className="d-flex justify-content-center transition cursor-pointer">
						<div className="flag-holder">
							<img className="img-fluid" src={Images.flagUSA} alt='' />
						</div>
						USA
					</li>
					<li className="d-flex justify-content-center transition cursor-pointer">
						<div className="flag-holder">
							<img className="img-fluid" src={Images.flagEurope} alt='' />
						</div>
						Europe
					</li>
				</ul>
			</div>
		</header>
	)
}