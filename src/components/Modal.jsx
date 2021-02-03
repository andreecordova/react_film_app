import React from 'react'

function Modal({ show, selected, setSelected, setShow }) {
	const close = () => {
    setSelected(null)
    setShow(false);
	};
	
	return (
		<div className={show ? 'modal show' : 'modal'} onClick={close}>
			{ show ? 
				<div className="modal_content" onClick={(e) => e.stopPropagation()}>
					<div className="modal_header">
						<h2 className="title">{selected.Title}</h2>
					</div>
					<div className="modal_body">
						<div className="image_content">
							<img className="modal_image" src={selected.Poster} alt={selected.Title} />
						</div>
						<div className="information_content">
							<p className="year">Año: {selected.Year}</p>
							<p className="director">{selected.Director}</p>
							<p className="actors">{selected.Actors}</p>
							<p className="awards">{selected.Awards}</p>
							<p className="plot">{selected.Plot}</p>
						</div>
					</div>
					<div className="modal_footer">
						<button className="modal_close" onClick={close}>Cerrar</button>
					</div>
				</div> : null	
			}
		</div>
	)
}

export default Modal
