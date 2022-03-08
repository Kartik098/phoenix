import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Tippy from '@tippyjs/react';

function ResilencyModal() {
    const [mdShow, setMdShow] = useState(false);
    const [resSelect,setRes] = useState(0);
    const[show,setShow] = useState(false);
    const[show2,setShow2] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        setMdShow(true)
        event.stopPropagation();
      } else{
        setMdShow(false)
      }
    
      setValidated(true);
     
       
    };
  return (
        <>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        onChange={()=> {setMdShow(true);setRes(1)}}
        checked={resSelect==1}
        value="1"
        name="group7"
        type={type}
        id={`inline-${type}-10`}
        
      />
       <Form.Check
        inline
        label="No"
        name="group7"
        type={type}
        id={`inline-${type}-9`}
        
      /> 
      </div>
  ))}
   <Modal
        size="md"
        show={mdShow}
        onHide={() => setMdShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
       
      >
        <Modal.Header closeButton onClick={()=>setRes(0)}>
          <Modal.Title id="example-modal-sizes-title-md">
            Resilency details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className='res' noValidate validated={validated} onSubmit={handleSubmit}>
        <label htmlFor="group8" className='PVEV'>Do you think all your site loads are Critical?<Tippy content='Some sites require a minimal load to be met in an outage (critical equipment, etc.) others require that the full site load be supported. To discuss this, Gridscape solutions generally refers to a Critical Load amount: An expected set of loads which will need to be supported during an outage'><button className='t'>?</button></Tippy></label> <br/>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        onChange={()=>{ setShow(false);}}
        name="group8"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group8"
        onChange={()=>{ setShow(true);}}
        checked={show==true}
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
        {show ? <Select /> : null}
              
                <label htmlFor="group10" className='PVEV'>Have you had any outages in the past year?</label> <br/>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group10"
        onChange={()=>{ setShow2(true);}}
        checked={show2==true}
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group10"
        onChange={()=>{ setShow2(false);}}
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
    {show2 ? <Select2 /> : null}
  <label htmlFor="group10" className='PVEV'>Is a power failure a detriment to your Business?</label> <br/>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group11"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="No"
        name="group11"
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
  
  
  
  <label htmlFor="group12" className='PVEV'>Please Describe how a power faliure will impact your business*</label> <br/>
  <Form.Control type="text" required/><br/>
        <div className='buttons'>
        <Tippy content='Warning!: Your info is not saved if you press cancel all your info will be gone!'><button className='cancel' type='button' onClick={()=> {setMdShow(false);setRes(0)}}>Cancel</button></Tippy>
          
          <button className='save' type='submit'>Save</button>
        </div>
        </Form>
        </Modal.Body>
      </Modal>
        </>
  )
}
const Select = ()=>(
  <div>
  <select className='site-type'>
  <option>Choose your critical load(%)</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
  <option value="40">40</option>
  <option value="50">50</option>
  <option value="60">60</option>
  <option value="70">70</option>
  <option value="80">80</option>
  <option value="90">90</option>
 
  </select><br/>
  </div>
)
const Select2 = ()=>(
  <div>
    <select className='site-type'>
                <option>No. of outages in the past year?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="More than 10">More than 10</option>
                </select><br/>
                <select className='site-type'>
                <option>How long have the outages lasted?</option>
                <option value="1 hour">1 hours</option>
                <option value="2 hours">2 hours</option>
                <option value="3 hours">3 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="6 hours">6 hours</option>
                <option value="8 hours">8 hours</option>
                <option value="10 hours">10 hours</option>
                <option value="12 hour">12 hour</option>
                <option value="18 hour">18 hour</option>
                <option value="1 day">1 day</option>
                <option value="2 days">2 days</option>
                <option value="3 days">3 days</option>
                <option value="4 day or above">4 days or above</option>
                
                </select><br/>
                <label htmlFor="group12" className='PVEV'>Past Outages types</label> <br/>
        {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="PSPS"
        name="group12"
        type={type}
        id={`inline-${type}`}
        required
      />
       <Form.Check
        inline
        label="Unplanned"
        name="group12"
        type={type}
        id={`inline-${type}`}
        required
      /> <br/>
      <Form.Check
        inline
        label="Other"
        name="group12"
        type={type}
        id={`inline-${type}`}
        required
      /> 
      </div>
  ))}
  <Form.Control type="text" /><br/>
  </div>
)
export default ResilencyModal