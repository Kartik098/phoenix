import React from 'react'
import Form from 'react-bootstrap/Form'


function Select() {
    
  return (
      
    <div>
    <Form.Select aria-label="Default select example" id='Select2' required>
       
        {Options.map((opt) => {
            return <option key={opt.value} value={opt.value}>{opt.value}</option>
        })} 
    
    </Form.Select>
    </div>
  )
}

export default Select
 
