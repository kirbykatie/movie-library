import React from 'react';
import PropTypes from 'prop-types';


const Modal = props => {
  const { show, children } = props;
  const showHideClassName = show ? "modal modal-show" : "modal";

  const handleModalClose = event => {
    console.log(event.target)
  }

  return (
    <div data-testid="Modal" className={showHideClassName} onClick={handleModalClose}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  )
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
