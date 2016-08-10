import React, { Component, PropTypes } from 'react';

import ListViewLayout from './list-view-layout';

const layoutStyle = {
	height: '100%',
	width: '100%',
	maxWidth: '410px',
	overflow: 'scroll',
	backgroundColor: 'white',
	color: 'black',
	borderLeft: '1px solid #e9eff3',
	boxShadow: '-3px 1px 10px -2px rgba(46,68,83,0.075)'
};

export class Layout extends Component {
	render() {
		const {
			notes
		} = this.props;

		return (
			<div style={ layoutStyle }>
				<ListViewLayout { ...{
					notes,
					selectNote: () => null,
					selectedFilter: 'All',
					updateFilter: () => null
				} } />
			</div>
		);
	}
}

Layout.displayName = 'NotificationsLayout';

Layout.propTypes = {
	notes: PropTypes.array
};

export default Layout;