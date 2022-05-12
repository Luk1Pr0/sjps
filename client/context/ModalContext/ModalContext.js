import { createContext, useState } from 'react';

// TYPES OF ACTIONS
import actions from '../actions';

export const ModalContext = createContext();

export function ModalProvider(props) {

	const [modalSource, setModalSource] = useState(null);

	// OPEN OR CLOSE AND SET MODAL SOURCE
	const dispatchModalEvent = (action, source) => {
		switch (action) {
			case actions.OPEN_MODAL:
				// SET MODAL SOURCE TO THE SELECTED IMAGE AND RETURN TO SHOW THE MODAL
				return setModalSource(source);
			case actions.CLOSE_MODAL:
				// CLOSE MODAL AND CLEAR THE IMAGE
				return setModalSource(null);
			default:
				return;
		}
	}

	return (
		<ModalContext.Provider value={{ dispatchModalEvent, modalSource }}>
			{props.children}
		</ModalContext.Provider>
	)
}