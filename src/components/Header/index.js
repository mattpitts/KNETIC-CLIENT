import React, { Component } from 'react';
import Account from '../Account';
import PatchCollection from '../PatchCollection';
import Knetic from '../../images/knetic.png';
import './Header.css';

class Header extends Component {
	render() {
		return(
			<header className="header">
				<img src={Knetic} alt="Knetic Logo" className="knetic-font"/>
				<div className="patch-select">
					<PatchCollection setPatchFromCollection={this.props.setPatchFromCollection} selectValues={this.props.selectValues}/>
				</div>
				<Account />
				<button className="btn">ABOUT</button>
			</header>
		);
	}
}

export default Header;
