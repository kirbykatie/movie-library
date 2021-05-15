import React from 'react';
import PropTypes from 'prop-types';


const Modal = props => {
  const { handleClickCallback, show, children } = props;
  const showHideClassName = show ? "modal modal-show" : "modal";

  // TODO: Make keyboard accessible
  const handleKeyPress = event => {
    // console.log(event.key)
  }

  return (
    <div data-testid="Modal" className={showHideClassName} onClick={handleClickCallback} onKeyPress={handleKeyPress}>
      <section className="modal_wrap">
        {children}
      </section>
    </div>
  )
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
