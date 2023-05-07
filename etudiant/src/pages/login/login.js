import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Stepper } from 'react-form-stepper';
import { login } from "../../JS/Actions/etudiant";
import logo from '../../component/img/logo-utm-fr.jpg'
import '../page.css'
const Login = () => {
  const [etudiant, setetudiant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setetudiant({ ...etudiant, [e.target.name]: e.target.value });
  };
  const handleEtudiant = (e) => {
    e.preventDefault();
    dispatch(login(etudiant, navigate));
  };

  return (
    
    <div className="container-page">
   
      <Form><Stepper width={70}
    steps={[{ label: 'التسجيل '}, { label: 'النفاذ إلى المنظومة' }, { label: ' مطلب الترشح ' }]}
    activeStep={2}
  />
      <div className="img"><div className="container-img"><img src = {logo} alt="logo" className="logo"/></div>
      </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="input">الرّجاء إدخال رقم بطاقة التعريف الوطنية </Form.Label>
          <Form.Control
            type="number"
            placeholder="رقم بطاقة التعريف الوطنية"
            onChange={handleChange}
            name="cin"
          />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="input">رمز البصمة</Form.Label>
          <Form.Control
            type="password"
            placeholder="رمز البصمة"
            onChange={handleChange}
            name="empreinte"
          />
        </Form.Group>
        

        <Button variant="secondary" type="submit" onClick={handleEtudiant} className="bouton-page">
          إرسال
        </Button>
      </Form>
    </div>
  );
};

export default Login;
