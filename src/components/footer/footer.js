import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Images } from '../../assets/assets'
import './footer.css'

export default function Footer() {
	return (
		<footer id="footer">
			<h3>AI suggested queries</h3>
			<ul className="list-unstyled ai-queries">
				<li className="d-flex align-items-center">
					<FontAwesomeIcon icon={faWandMagicSparkles} />
					Listed shares balances per  month?
				</li>
				<li className="d-flex align-items-center">
					<FontAwesomeIcon icon={faWandMagicSparkles} />
					Liquid  assets per account?
				</li>
				<li className="d-flex align-items-center">
					<FontAwesomeIcon icon={faWandMagicSparkles} />
					What are current portfolio risks?
				</li>
			</ul>
			<div className="footer-btn d-flex justify-content-center">
				<Link to="" className="btn btn-outline d-flex justify-content-center align-items-center">
					<span className="icon-holder">
						<img className="img-fluid transition" src={Images.iconSlider} alt="" />
					</span>
					Customise
				</Link>
				<Link to="" className="btn btn-outline d-flex justify-content-center align-items-center">
					<span className="icon-holder">
						<img className="img-fluid transition" src={Images.iconCloud} alt="" />
					</span>
					Add Widget
				</Link>
			</div>
		</footer>
	)
}