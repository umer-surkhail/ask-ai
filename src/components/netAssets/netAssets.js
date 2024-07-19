import React from 'react'
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faArrowTrendUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import NetBlock from '../netBlock/netBlock';
import BankAccounts from '../bankAccounts/bankAccounts';
import ManagedFunds from '../managedFunds/managedFunds'
import ListedShares from '../listedShares/listedShares';
import UnlistedShares from '../unlistedShares/unlistedShares';
import PrivateEquity from '../privateEquity/privateEquity';
import FixedIncome from '../fixedIncome/fixedIncome';
import PrivateProperty from '../privateProperty/privateProperty';
import './netAssets.css'
	
export default function NetAssets() {
	return (
		<div className="net-assets">
			<NetBlock blockName="net-asset-block" />
			<div className="group-by d-flex justify-content-between align-items-center mb-3">
				<span>Group By:</span>
				<ul className="list-unstyled d-flex justify-content-end mb-0">
					<li className="transition cursor-pointer active">Asset class</li>
					<li className="transition cursor-pointer">Entity</li>
					<li className="transition cursor-pointer">Broker</li>
				</ul>
			</div>
			<Accordion defaultActiveKey="0" className="assets-accordion mb-3">
				<Accordion.Item eventKey="0">
					<Accordion.Header className="bg-blue">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Bank Accounts
						</div>
						<span className="amount bg-white">$8,903,000</span>
					</Accordion.Header>
					<Accordion.Body>
						<BankAccounts />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header className="bg-orange-dark">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Managed Funds
						</div>
						<span className="amount bg-white">$12,427,264</span>
					</Accordion.Header>
					<Accordion.Body>
						<ManagedFunds />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header className="bg-yellow">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Listed Shares
						</div>
						<span className="amount bg-white">$13,967,505</span>
					</Accordion.Header>
					<Accordion.Body>
						<ListedShares />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header className="bg-grey-dark">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Unlisted Shares
						</div>
						<span className="amount bg-white">$3,521,073</span>
					</Accordion.Header>
					<Accordion.Body>
						<UnlistedShares />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header className="bg-orange-light">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Private Equity
						</div>
						<span className="amount bg-white">$5,791,299</span>
					</Accordion.Header>
					<Accordion.Body>
						<PrivateEquity />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="5">
					<Accordion.Header className="bg-grey-light">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Fixed Income
						</div>
						<span className="amount bg-white">$9,472,889</span>
					</Accordion.Header>
					<Accordion.Body>
						<FixedIncome />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="6">
					<Accordion.Header className="bg-green-light">
						<div className="d-flex align-items-center">
							<span className="icon-holder me-2">
								<FontAwesomeIcon icon={faMinus} />
								<FontAwesomeIcon icon={faPlus} />
							</span>
							Private Property
						</div>
						<span className="amount bg-white">$23,731,276</span>
					</Accordion.Header>
					<Accordion.Body>
						<PrivateProperty />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	)
}