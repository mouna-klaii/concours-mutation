import React, { useState } from 'react';
import { Form, Table} from 'react-bootstrap';
import './form.css'

const Formulaire = () => {
    
  const [formFields, setFormFields] = useState([
    { ANNEE_BAC: '', SESSION: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.ANNEE_BAC] = event.target.value;
    setFormFields(data);
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      ANNEE_BAC: '',
      SESSION: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
  
  return (
  
    <div><Table width="1000" className='tab'
    >
      <tbody>
        <tr>
          <th scope="col">&nbsp;الرجاء تعمير المعطيات بكل دقة</th>
        </tr>
      </tbody>
    </Table><Form onSubmit={submit}>{formFields.map((form, index) => {
       return (
       <div key={index} className='form'>
                <button class="btn btn-outline-warning" onClick={() => removeFields(index)}>إلغاء</button>  <button class="btn btn-outline-danger"onClick={addFields}>اضافة</button><input className='input'
                name='SESSION'
                placeholder='الدورة'
                onChange={event => handleFormChange(event, index)}
                value={form.SESSION}
              />
             
            </div>
          )
        })}
         
      
      <button class="btn btn-outline-danger" onClick={submit}>Submit</button>
      </Form>
   
    </div>
  )
 
}

export default Formulaire