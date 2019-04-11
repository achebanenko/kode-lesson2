import React from 'react'
import { styled } from '@ui/theme'
import { SelectCountry } from '@ui/pages'

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
	background: rgba(0, 0, 0, .7);
  opacity: 1;
  animation: fade-in .9s ease;

  @keyframes fade-in {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: flex;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const StyledModal = styled.div`
  background: #fff;
`

export const Modal = (props) => {
  
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = null
  })

  let ModalContent = null
  if(props.match.params.selection === 'select-country') {    
    ModalContent = () => <SelectCountry {...props} />
  }

  const outsideClick = e => {
    const content = document.querySelector('.modal-content');
    if(!!content) {
      if (!content.contains(e.target)) {
        return props.history.goBack()
      }
    }
    return
  }

  return (
    <StyledOverlay onClick={outsideClick}>
      <StyledModal className="modal-content">
        <ModalContent />
      </StyledModal>
    </StyledOverlay>
  )
}