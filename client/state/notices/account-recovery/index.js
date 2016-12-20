/**
 * External dependencies
 */
import { translate } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import {
	successNotice,
	errorNotice,
} from 'state/notices/actions';

import {
	getAccountRecoveryPhone,
	getAccountRecoveryEmail,
} from 'state/account-recovery/settings/selectors';

import { dispatchError } from '../utils';

const getUpdateSuccessMessage = ( target, getState ) => {
	switch ( target ) {
		case 'phone':
			const oldPhone = getAccountRecoveryPhone( getState() );

			if ( null == oldPhone ) {
				return translate( 'Successfully added new recovery SMS number.' );
			}

			return translate( 'Successfully updated recovery SMS number.' );

		case 'email':
			const oldEmail = getAccountRecoveryEmail( getState() );

			if ( '' === oldEmail ) {
				return translate( 'Successfully added new recovery email address.' );
			}

			return translate( 'Successfully updated recovery email address.' );

		default:
			return translate( 'Successfully updated the recovery option.' );
	}
};

const getUpdateErrorMessage = ( target ) => {
	switch ( target ) {
		case 'phone':
			return translate( 'An error occurred while updating your account recovery phone number.' );
		case 'email':
			return translate( 'An error occurred while updating your account recovery email.' );
		default:
			return translate( 'An error occurred while updating your account recovery options.' );
	}
};

const getDeleteSuccessMessage = ( target ) => {
	switch ( target ) {
		case 'phone':
			return translate( 'Successfully removed recovery SMS number.' );
		case 'email':
			return translate( 'Successfully removed recovery email address.' );
		default:
			return translate( 'Successfully removed the recovery option.' );
	}
};

const getDeleteErrorMessage = ( target ) => {
	switch ( target ) {
		case 'phone':
			return translate( 'An error occurred while deleting your account recovery phone number.' );
		case 'email':
			return translate( 'An error occurred while deleting your account recovery email.' );
		default:
			return translate( 'An error occurred while deleting your account recovery options.' );
	}
};

const getResentSuccessMessage = ( target ) => {
	switch ( target ) {
		case 'phone':
			return translate( 'The validation code has been resent successfully. Please check your phone.' );
		case 'email':
			return translate( 'The validation email has been resent successfully. Please check your mailbox.' );
		default:
			return translate( 'The validation has been resent successfully.' );
	}
};

const getResentFailedMessage = ( target ) => {
	switch ( target ) {
		case 'phone':
			return translate( 'We encountered a problem sending you the validation code. Please try again later.' );
		case 'email':
			return translate( 'We encountered a problem sending you the validation email. Please try again later.' );
		default:
			return translate( 'We encountered a problem sending you the validation. Please try again later.' );
	}
};

export const onAccountRecoverySettingsFetchFailed = dispatchError(
	translate( 'An error occurred while fetching your account recovery settings.' )
);

export const onAccountRecoverySettingsUpdateSuccess = ( dispatch, { target }, getState ) =>
	dispatch( successNotice( getUpdateSuccessMessage( target, getState ) ) );

export const onAccountRecoverySettingsUpdateFailed = ( dispatch, { target } ) =>
	dispatch( errorNotice( getUpdateErrorMessage( target ) ) );

export const onAccountRecoverySettingsDeleteSuccess = ( dispatch, { target } ) =>
	dispatch( successNotice( getDeleteSuccessMessage( target ) ) );

export const onAccountRecoverySettingsDeleteFailed = ( dispatch, { target } ) =>
	dispatch( errorNotice( getDeleteErrorMessage( target ) ) );

export const onResentAccountRecoveryEmailValidationSuccess = ( dispatch, { target } ) =>
	dispatch( successNotice( getResentSuccessMessage( target ) ) );

export const onResentAccountRecoveryEmailValidationFailed = ( dispatch, { target } ) =>
	dispatch( errorNotice( getResentFailedMessage( target ) ) );
