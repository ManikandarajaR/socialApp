import React,{useState} from 'react';
import '../css/modal.css';
import '../css/form.css';
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


<form >
                         
               <div className="form">

<div className="group">
     <label className="label">
          Enter the Name of the Segment
     </label>  
     <input type='text' 
     id="segment"
     placeholder="Name of the segment" 
     className="segment"  
    />
     <p>To save your segement you need to add the schemas to build the query</p>

</div>

<div className="desc">
                 <p><i class="fas fa-circle green"></i> - User Traits</p>
                 <p> <i class="fas fa-circle red"></i> - Group Traits</p>
</div>

<div className="dropdowns">

     <div className="form-group">
             <i class="fas fa-circle green"></i> 
             <input type='text' 
             id="fname"
               placeholder="First Name" 
               className="inputs" 
            />
             <i class="fas fa-minus"></i>

     </div>

     <div className="form-group">
             <i class="fas fa-circle red"></i> 
             <input type='text' 
             id="lname"
             placeholder="Last Name" 
             className="inputs" 
             onChange={
               (e) => handle(e)
          }
             value={data.lastname}/>
             <i class="fas fa-minus"></i>
     </div>

     <div className="form-group">
             <i class="fas fa-circle red"></i> 
             <input type='text' 
             id="age"
             placeholder="Age" 
             className="inputs" 
            />
             <i class="fas fa-minus"></i>
     </div>
     <div className="form-group">
             <i class="fas fa-circle red"></i> 
             <input type='text' 
             id="city"
             placeholder="City"
       
              className="inputs"
           />
          
             <i class="fas fa-minus"></i>
     </div>
     <div className="form-group">
             <i class="fas fa-circle red"></i> 
             <input type='text' 
             id="states"
             placeholder="State" 
             className="inputs" 
       />
             <i class="fas fa-minus"></i>
     </div>


     <div className="form-control center">
                <i class="fas fa-plus"></i>
                <a href="#">Add new schema</a>
     </div>


</div>

</div>

                    <div className="footer">

                    <button className="submit" type="submit">Save the segment</button>
                    <button onClick = {onClose} className="close">close</button>
                    

                    </div>

                    </form>

               
               </div>

           

               </div>
             


          </div>
     )
}
export default Modal;
