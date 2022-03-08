import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import 'tippy.js/dist/tippy.css'
import Tippy from '@tippyjs/react'

function PVModal() {
   
  const [mdShow, setMdShow] = useState(false);
  
  const [PVSelect,setPV] = useState(false);
  const [validated, setValidated] = useState(false); 
 
  console.log(PVSelect)
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      setMdShow(true)
      event.stopPropagation();
    } else{
      setMdShow(false)
      setPV(true)
    }
    
    setValidated(true);
   
     
  };
  
  return (
    
    <>
        {[ 'radio'].map((type) => (
         <div key={`inline-${type}`} className="mb-3" >
      <Form.Check
        inline
        label="Yes"
        name="group2"
       
        onChange={()=>{ setMdShow(true);}}
        checked={PVSelect === true}
        
        type={type}
        id={`inline-${type}-3`} 
      />
       <Form.Check
        inline
        label="No"
        name="group2"
      
        type={type}
        id={`inline-${type}-4`}
        
      /> 
      </div>
        ))}
        
          <Modal
        size="md"
        show={mdShow}
        onHide={() => setMdShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton onClick={()=>setPV(0)}>
          <Modal.Title id="example-modal-sizes-title-md">
           PV Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Existing PV size</Form.Label>
    <Form.Control type="text" placeholder="Solar PV Size(kW)" required maxLength={5}  minLength={0} pattern="[0-9]"/>
   
  </Form.Group>
  <label htmlFor="group3">Existing PV types</label>
        {[ 'checkbox'].map((type) => (
         <div key={`inline-${type}`} className="mb-3">
           
      <Form.Check
        inline
        label="Carport"
        name="group3"
        
        type={type}
        id={`inline-${type}-3`}
        required
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
  <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Attach Solar Generation Data <Tippy content='Your Solar generation data of atleast 1 year*'><button className='t'>?</button></Tippy></Form.Label>
          <Form.Control type="file" multiple/>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Attach System SLD</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
       
        <div className='buttons'>
        <Tippy content='Warning!: Your info is not saved if you press cancel all your info will be gone!'><button className='cancel' type='button' onClick={()=>{setMdShow(false);setPV(0)}}>Cancel</button></Tippy>
          
          <button className='save' type='submit' onClick={()=>{setMdShow(false);setPV(true)}}>Save</button>
        </div>
</Form>
        </Modal.Body>
      </Modal>
    
    </>
  )
}

export default PVModal
