import React from 'react'
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function ListedShares() {
	return (
		<div className="listed-shares">
			{data.map((listedshare,index)=>(
				<div className="listed-share" key={index}>
					<div className="inai-header d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<div className="image-holder me-2">
								<img className="img-fluid" src={listedshare.image} alt="" />
							</div>
							<strong className="bank-name">{listedshare.name}</strong>
						</div>
						<div className="d-flex align-items-center">
							<strong className="bank-amount text-purple">{listedshare.amount}</strong>
							<span className={`badge percentage ms-1 ${listedshare.pofitLoss}`}>{listedshare.percentage}</span>
						</div>
					</div>
					<ul className="list-unstyled inai-list">
						{listedshare.shares.map((share,index) => (
							<li className="d-flex justify-content-between align-items-center" key={index}>
								<div className="d-flex flex-column align-items-start">
									<span className="share-sub-title">{share.subTitle}</span>
									<span className="share-name">{share.title}</span>
								</div>
								<div className="d-flex align-items-center">
									<div className="d-flex flex-column align-items-end">
										<span className="amount">{share.amount}</span>
										<span className={`percentage ${share.profitLoss}`}>{share.percentage}</span>
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