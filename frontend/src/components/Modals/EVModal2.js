import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Tippy from '@tippyjs/react';
function EVModal2() {
    const [mdShow, setMdShow] = useState(false);
    const [EVSelect2,setEV2] = useState(0);
    const [EVcharge,setCharge] = useState(null);
    const [validated, setValidated] = useState(false);
    function getData(val){
      const customtext = document.querySelector(".customtext")
      var att = document.createAttribute("readonly")
      customtext.setAttributeNode(att)
        if(val.target.value == ""){
          const customtext = document.querySelector(".customtext")
          customtext.removeAttribute("readonly")
        }
        else if(!val.target.value == ""){ 
          const customtext = document.querySelector(".customtext")
          
          att.value = true;
          customtext.setAttributeNode(att)
          customtext.value = val.target.value
          
        }
        customtext.value = val.target.value
        setCharge(val.target.value)
        att.value = true;
        
    }
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
        onChange={()=>{ setMdShow(true);setEV2(1)}}
        checked={EVSelect2==1}
        value="1"
        name="group6"
        type={type}
        id={`inline-${type}-8`}
      />
       <Form.Check
        inline
        label="No"
        name="group6"
        type={type}
        id={`inline-${type}-7`}
      /> 
      </div>
  ))}
      <Modal
        size="md"
        show={mdShow}
        onHide={() => setMdShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
        centered
      >
        <Modal.Header closeButton onClick={()=> setEV2(0)}>
          <Modal.Title id="example-modal-sizes-title-md">
            EV Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>How many EV chargers does your site require?</Form.Label>
                <Form.Control type="text" placeholder="No. of EV chargers"  required/>  
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Daily Visiting vehicles</Form.Label><br/>
                  <Form.Text className="text-muted">
                  Rough Estimates are acceptable
              </Form.Text>
                <Form.Control type="text" required/>
                
              </Form.Group>
              <label htmlFor="group7">Charger Type</label>
              <Form.Select aria-label="Default select example" className='Select' onClick={getData}>
                <option>Select charger type</option>
                <option value="2.4 kW" >Level 1</option>
                <option value="7.2 kW">Level 2</option>
                <option value="50 kW">DC FC</option>
                <option value="" >Custom</option>
                </Form.Select><br/>
  <Form.Group className="mb-3" >
               
                <Form.Control className='customtext' type="text"  placeholder="kw" defaultValue={EVcharge} pattern="[1-9]{1,9}" required readOnly />
              </Form.Group>
  <div className='buttons'>
  <Tippy content='Warning!: Your info is not saved if you press cancel all your info will be gone!'><button className='cancel' type='button' onClick={()=> {setMdShow(false);setEV2(0)}}>Cancel</button></Tippy>
          
          <button className='save' type='submit'>Save</button>
        </div>
        
            </Form>
            </Modal.Body>
      </Modal>
    </>
  )
}

export default EVModal2