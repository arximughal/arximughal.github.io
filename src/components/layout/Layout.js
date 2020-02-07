import React from 'react';
import styles from './Layout.module.scss';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<>
				<div className={styles.container}>
					{this.props.children}
				</div>
			</>
		);
	}
}
