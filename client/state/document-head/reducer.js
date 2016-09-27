/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { createReducer } from 'state/utils';
import {
	DOCUMENT_HEAD_LINK_ADD,
	DOCUMENT_HEAD_META_ADD,
	DOCUMENT_HEAD_TITLE_SET,
	DOCUMENT_HEAD_UNREAD_COUNT_SET,
	ROUTE_SET
} from 'state/action-types';

/**
 * Constants
 */
export const DEFAULT_META_STATE = [ { property: 'og:site_name', content: 'WordPress.com' } ];

export const title = createReducer( '', {
	[ DOCUMENT_HEAD_TITLE_SET ]: ( state, action ) => action.title,
	[ ROUTE_SET ]: () => ''
} );

export const unreadCount = createReducer( 0, {
	[ DOCUMENT_HEAD_UNREAD_COUNT_SET ]: ( state, { count } ) => count,
	[ ROUTE_SET ]: () => 0
} );

export const meta = createReducer( DEFAULT_META_STATE, {
	[ DOCUMENT_HEAD_META_ADD ]: ( state, action ) => [ ...state, action.meta ],
	[ ROUTE_SET ]: () => DEFAULT_META_STATE
} );

export const link = createReducer( [], {
	[ DOCUMENT_HEAD_LINK_ADD ]: ( state, action ) => [ ...state, action.link ],
	[ ROUTE_SET ]: () => []
} );

export default combineReducers( {
	link,
	meta,
	title,
	unreadCount
} );
