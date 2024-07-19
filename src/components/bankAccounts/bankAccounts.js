import React from 'react'
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function BankAccounts() {
	console.log(data)
	return (
		<React.Fragment>
			{data.map((bank,index) => (
				<div className="bank-item" key={index}>
					<div className="inai-header d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<div className="image-holder me-2">
								<img className="img-fluid" src={bank.image} alt="" />
							</div>
							<strong className="bank-name">{bank.name}</strong>
						</div>
						<strong className="bank-amount text-purple">{bank.amount}</strong>
					</div>
					<ul className="list-unstyled inai-list">
						{bank.transactions.map((transaction,index) => (
							<li className="d-flex justify-content-between align-items-center" key={index}>
								<span className="transaction-name">{transaction.title}</span>
								<div className="d-flex align-items-center">
									<span className="amount">{transaction.amount}</span>
									<FontAwesomeIcon icon={faChevronRight} className="ms-2" />
								</div>
							</li>
						))}
					</ul>
				</div>
			))}
		</React.Fragment>
	)
}