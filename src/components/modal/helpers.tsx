import React from 'react';
import { hideGlobalModal, showGlobalModal } from './GlobalModal';
import FailurePopup from './Popup/FailurePopup';
import SuccessPopup from './Popup/SuccessPopup';

export function showSuccessModal(title: string) {
	showGlobalModal({
		modalKey: 'success-modal',
		Component: () => (
			<SuccessPopup
				onPress={() => hideGlobalModal('success-modal')}
				title={title}
			/>
		),
	});
}

export function showFailureModal(title?: string) {
	showGlobalModal({
		modalKey: 'failure-modal',
		Component: () => (
			<FailurePopup
				onPress={() => hideGlobalModal('failure-modal')}
				title={title}
			/>
		),
	});
}
