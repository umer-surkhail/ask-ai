import React from 'react'
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function UnlistedShares() {
	return (
		<div className="unlisted-share-items">
			{data.map((uls,index) => (
				<div className="unlisted-share-item" key={index}>
					<div className="inai-header d-flex justify-content-between align-items-center">
						<span className="uls-name">{uls.name}</span>
						<div className="d-flex align-items-center">
							<span className="amount text-purple">{uls.amount}</span>
							<span className={`badge percentage ms-2 ${uls.profitLoss}`}>{uls.percentage}</span>
						</div>
					</div>
					<ul className="list-unstyled inai-list">
						{uls.ulshares.map((uls,index)=>(
							<li className="d-flex justify-content-between align-items-center" key={index}>
								<span className="mf-name">{uls.title}</span>
								<div className="d-flex align-items-center">
									<div className="d-flex flex-column align-items-end">
										<span className="amount">{uls.amount}</span>
										<span className={`percentage ${uls.profitLoss}`}>{uls.percentage}</span>
									</div>
									<FontAwesomeIcon icon={faChevronRight} className="ms-2" />
								</div>
							</li>
						))}
					</ul>
				</div>
			))}		
		</div>
	)
}