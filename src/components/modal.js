import React from 'react';
import '../css/modal.css';
import Form from './Form'

 function Modal({ open,onClose}) {
     if(!open) return null

     const success = () =>
     {
          alert(`Segment saved`);
     }

     return (
          <div>
               <div className="box">
               <div className="modal">
                         <div className="nav-modal">
                                        <ul>
                                             <li>
                                                  <i class="fas fa-less-than"></i>
                                                  <a>Saving Segment</a>
                                             </li>
                                        </ul>
                         </div>

                         <Form/>

                    <div className="footer">

                    <button className="submit" onClick={success}>Save the segment</button>
                    <button onClick = {onClose} className="close">close</button>
                    

                    </div>

               
               </div>

               </div>
             


          </div>
     )
}
export default Modal;
