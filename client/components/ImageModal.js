import { useContext } from 'react';

// CONTEXT AND ACTIONS
import { ModalContext } from "../context/ModalContext/ModalContext"
import actions from "../context/actions"

export default function ImageModal({ image }) {

	const { dispatchModalEvent } = useContext(ModalContext);

	const handleClick = () => {
		dispatchModalEvent(actions.CLOSE_MODAL);
	}

	return (
		<aside className="modal-container">

			<div className="modal">

				<div className="btn-container">
					<button className="btn btn--close" onClick={handleClick}>Zamknij</button>
				</div>

				<img src={image} alt="" />

			</div>

		</aside>
	)
}