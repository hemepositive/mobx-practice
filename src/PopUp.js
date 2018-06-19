import { observer, inject } from "mobx";
import { branch, compose, renderNothing } from "recompose";
import { withTimer } from "react-with-timer-hoc";

const enhancer = compose(
// inject(({ uiStore }) = ({ // ERROR with (({uiStore}) per Linter
  inject(({ uiStore }) = ({
      isOpen: uiStore.isPopupOpen,
      setOpen: uiStore.setPopupOpen 
    }),
    branch(({ isOpen }) => !isOpen, renderNothing),
    withTimer({
      delay: 5000,
      onTimeout: ({ setOpen }) => setOpen(false),
      options: {
        startOnMount: true
      }
    })
  )
);

const ModalPopup = ({ finishTimer }) => (
  <div style={{width:200, height:100, color: 'red'}}>
    <button label="Close Window" onClick={finishTimer} />
  </div>
);

export default enhancer(ModalPopup);
