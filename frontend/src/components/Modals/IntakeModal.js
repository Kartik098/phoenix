import React,{ Component, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Tippy from '@tippyjs/react'
import './intakeModal.css'
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import "bootstrap/dist/css/bootstrap.min.css";
import 'tippy.js/dist/tippy.css'
import PVModal from './PVModal';
import EVModal from './EVModal';
import DataModal from './dataModal'
import ResilencyModal from './resilencyModal'
import CSRFTokens from '../CSRFTokens'
import Navbar from '../navbar'
import axios from 'axios'
import Cookies from 'js-cookies'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// var Options = [{
//   value: "warehouse",
// },{
//   value: "Small Office",
  
// },{
//   value: "Medium office",
 
// },,{
//   value: "Large office",
 
// },{
//   value: "Primary school",
 
// },{
//   value: "Secondary school",
 
// },{
//   value: "Stand-alone retail",
 
// },{
//   value: "SuperMarket",
 
// },{
//   value: "Strip Mall",
 
// },{
//   value: "Full Service Restaurant",
 
// },{
//   value: "Quick Service Restaurant",
 
// },{
//   value: "Hospital",
 
// },{
//   value: "Small Hotel",
 
// },{
//   value: "Large Hotel",
 
// },{
//   value: "Midrise Apartment",
 
// },{
//   value: "Outpatient Health Care",
 
// }]
class IntakeModal extends Component{
  
  
  

render(){
  const handleFormSubmit = async (event, requestType) => {
    event.preventDefault();
    const cname = event.target.elements.cname.value;
    const sitename = event.target.elements.sitename.value;
    const siteaddress = event.target.elements.siteaddress.value;
    const utillityname = event.target.elements.utillityname.value;
    const category = event.target.elements.category.value;
    const emailaddress = event.target.elements.emailaddress.value;
    const contact_name = event.target.elements.contact_name.value;
    const config = {
      headers:{
       'Accept': 'application/json',
        "Content-Type":"application/json",
        "X-CSRFToken": Cookies.get('csrftoken'),
        "Access-Control-Origin": "*"
      }
      ,credentials: 'include',
    }
     switch ( requestType ){
       case 'post':
         try {

           const res = await axios.post('$(process.env.REACT_APP_API_URL)/api/companys/', {
             cname: cname,
             sitename: sitename,
             siteaddress: siteaddress,
             utillityname: utillityname,
             category: category,
             emailaddress: emailaddress,
             contact_name: contact_name,
           } , config)
           return res.json();
         } catch (err) {
           return console.log(err)
         }
        
       case 'put':
         return;
        
     } 
}   

const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

   return (
    <>    
     <Navbar /><br/>
       <div className='main-modal'>
      <Form className='form-main'  method="POST" onClick={handleFormSubmit}>
      {csrftoken}
 
    <CSRFTokens />
      <h4 className='info-title'>General-information</h4>
  <Form.Group className="mb-3" >
    <Form.Label>Company Name*</Form.Label>
    <Form.Control type="text" placeholder="e.g Gridscape Solutions" className='formcont' name='cname' required />
    
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Site Name*</Form.Label>
    <Form.Control type="text" placeholder="e.g Gridscape" className='formcont' name='sitename'    required/>
    
  </Form.Group>
  <label htmlFor="group14" className='PVEV'>Site type*</label> <br/>
  {[ 'radio'].map((type) => (
         <div key={`inline-${type}`} className="mb-3" >
      <Form.Check
        inline
        label="Non Residential"
        name="group14"
        // onChange={()=>{ setShow(true);}}
        // checked={show==true}
        //  value = {true}
         
       
        type={type}
        id={`inline-${type}-3`} required
      />
       <Form.Check
        inline
        label="Residential"
        name="group14"
        // onChange={()=>{ setShow(false);}}
        type={type}
        id={`inline-${type}-4`}
         required
      /> 
      </div>
        ))}
         
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Site Address*</Form.Label>
    <Form.Control name='siteaddress'   className='formcont' as="textarea" rows={3} pattern='[A-Za-z0-9\.\-\s\,]' placeholder=' 30, 2nd Floor, Bhagat Colony, near Sushan Circle, Makarpura, Vadodara, Gujarat 390010'/>
    <Form.Control.Feedback type="invalid">
    Please enter a valid name 
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Contact person*</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name='contact_name'   className='formcont' maxLength={20} minLength={3} required/>
    <Form.Control.Feedback type="invalid">
    Please enter a valid name 
    </Form.Control.Feedback>
  </Form.Group>
  <InputGroup hasValidation>
  <Form.Group className="mb-3" controlId="validationCustom05" >
    <Form.Label>Email address*</Form.Label>
    
    <Form.Control type="text" placeholder="Enter email" pattern='[^@]+@[^@]+\.[^@]+' className='form-control2' name='emailaddress'    required />
      <Form.Control.Feedback type="invalid">
    Please enter a valid email address
    </Form.Control.Feedback>
  </Form.Group>
  </InputGroup>
  <Form.Group className="mb-3" >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="(Optional)" className='formcont' minLength={10} maxLength={10} name='comp_contactno' pattern="[0-9]{10}"/>
  </Form.Group>
  <h5 className='info-title'>Utillity Details* <Tippy content='Please refer to your electric bills for this information'><button className='t'>?</button></Tippy></h5>
  <Form.Select aria-label="Default select example" className='Select' name='utillityname'   required>
  <option>Select utillity</option>
  <option value="PG & E">PG & E</option>
  <option value="SCE">SCE</option>
  <option value="SDGE">SDGE</option>
  <Form.Control.Feedback type="invalid">
    Please select a valid utillity
    </Form.Control.Feedback>
</Form.Select><br/>
    <DataModal />
 
  <label htmlFor="group1" className='PVEV'>Does the site has existing PV?*</label> <br/>
  
   <PVModal/>
   <h4 className='info-title'>Desired PV Details</h4>
        <label htmlFor="group3">Desired PV types</label>
        {[ 'checkbox'].map((type) => (
         <div key={`inline-${type}`} className="mb-3">
           
      <Form.Check
        inline
        label="Carport"
        name="group3"
        
        type={type}
        id={`inline-${type}-3`}
       
      /> <br/>
       <Form.Check
        inline
        label="Rooftop"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
      /> <br/>
       <Form.Check
        inline
        label="GroundMount"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
      /> 
      </div>
        ))}
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Desired PV Description</Form.Label><br/>
    <Form.Text className="text-muted">
      A. Specific locations/areas which are available/not available for PV <br/>B. Priority for the areas/locations that needs to be used
</Form.Text>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <label htmlFor="group4" className='PVEV'>Does the site has existing EV?*</label> 
  <EVModal />
  <label htmlFor="group7" className='PVEV'>Do you want to meet resiliency goals?*</label>
  <ResilencyModal />
  <div className='buttons'>
  <Tippy content='Warning!: Your info is not saved if you press cancel all your info will be gone!'><button className='cancel' type='button' >Cancel</button></Tippy>        
          <button className='save'   htmltype="submit">Save</button> 
        
        </div><br/>
       
</Form>
     
        
          
        
     
</div> 
  </>
  )
}
}
//  const Select = ()=>(
   
//    <div>
//    <label htmlFor='category'>Select Non residential site type</label><br/><br/>
//   <select className='site-type2' name='category'  >
//   {
//     Options.map((opt) => {
//       return <option key={opt.value} value={opt.value}>{opt.value}</option>
//        })
//   } 
// </select>
// </div>
//  )
      


   
export default IntakeModal