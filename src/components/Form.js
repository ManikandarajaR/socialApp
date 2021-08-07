import React from 'react';
import '../css/form.css';

export default function Form() {
     return (
          <div>

               <div className="form">

               <div className="group">
                    <label className="label">
                         Enter the Name of the Segment
                    </label>  
                    <input type='text' placeholder="Name of the segment" className="segment" />
                    <p>To save your segement you need to add the schemas to build the query</p>

               </div>

               <div className="desc">
                                <p><i class="fas fa-circle green"></i> - User Traits</p>
                                <p> <i class="fas fa-circle red"></i> - Group Traits</p>
               </div>

               <div className="dropdowns">

                    <div className="form-group">
                            <i class="fas fa-circle green"></i> 
                            <select className="inputs">
                                   <option>First Name</option>
                            </select>
                            <i class="fas fa-minus"></i>

                    </div>

                    <div className="form-group">
                            <i class="fas fa-circle red"></i> 
                            <select className="inputs">
                                   <option>Accout Name</option>
                            </select>
                            <i class="fas fa-minus"></i>

                    </div>

                    <div className="form-group">
                            <i class="fas fa-circle gray"></i> 
                            <select className="inputs">
                                   <option>Add schema to segment</option>
                            </select>
                            <i class="fas fa-minus"></i>

                    </div>

                    <div className="form-control center">
                               <i class="fas fa-plus"></i>
                               <a href="#">Add new schema</a>
                    </div>
               

               </div>
          
          </div>


          </div>
     )
}
