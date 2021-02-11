import ReactDOM from 'react-dom';
import { ReactComponent as LoadingIcon } from '../../images/loading.svg';

const Spinner = () => {
   return ReactDOM.createPortal(
      <div className="fixed z-50 flex items-center justify-center w-screen min-h-screen bg-white">
         <LoadingIcon className="w-24 h-24 sm:h-32 sm:w-52 animate-spin-slow" />
      </div>,
      document.querySelector('#spinner')
   );
}
 
export default Spinner;