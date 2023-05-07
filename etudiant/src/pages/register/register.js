import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Stepper } from 'react-form-stepper';
import logo from '../../component/img/logo-utm-fr.jpg'
import { register } from "../../JS/Actions/etudiant";

const Register = () => {
  const [newEtudiant, SetnewEtudiant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    SetnewEtudiant({ ...newEtudiant, [e.target.name]: e.target.value });
  };
  const handleEtudiant = (e) => {
    e.preventDefault();
    dispatch(register(newEtudiant, navigate));
  };
  
  return (
    <div className="container-page">
      
   <Form> <Stepper width={100}
  steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
  activeStep={1}
/><div className="img"><div className="container-img"><img src = {logo} alt="logo" className="logo"/></div>
      </div>
       <Form.Group><Form.Label htmlFor="" className="input">رقم بطاقة التعريف الوطنية</Form.Label>
          <Form.Control
            placeholder="بطاقة التعريف الوطنية"
            onChange={handleChange}
           name="cin"
          /> 
        
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="" className="input">رمز البصمة</Form.Label>
          <Form.Control
            type="password"
            placeholder=" ادخل رمز البصمة "
            onChange={handleChange}
            name="empreinte"
            autocomplete="current-password"
          />
        </Form.Group>

       
        <Form.Group className="mb-3">
          <Form.Label htmlFor="" className="input">الاسم</Form.Label>
          <Form.Control
            placeholder="الاسم"
            onChange={handleChange}
            name="prenom"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="" className="input">اللقب</Form.Label>
          <Form.Control
            placeholder="اللقب"
            onChange={handleChange}
            name="nom"
          /> </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="" className="input">تاريخ الولادة</Form.Label>
          <Form.Control
            type="Date"
            placeholder="تاريخ الولادة"
            onChange={handleChange}
            name="date_naissance"
          />
        </Form.Group>
        <Form.Label htmlFor="" className="input">مكان الولادة</Form.Label>
        <Form.Select
          aria-label="مكان الولادة"
          onChange={handleChange}
          name="lieu_naissance"        >
            <option value="--"></option>
          <option value="Ariana">أريانة</option>
          <option value="Béja">باجة</option>
          <option value="بن عروس">بن عروس"</option>
          <option value="بنزرت">بنزرت</option>
          <option value="Gabés">قابس</option>
          <option value="Gafsa">قفصة</option>
          <option value="Jendouba">جندوبة</option>
          <option value="Kairouan">قيروان</option>
          <option value="Kasserine">القصرين</option>
          <option value="Kebili">قبلي</option>
          <option value="Kef">الكاف</option>
          <option value="Mahdia">المهدية</option>
          <option value="La Manouba">منوبة</option>
          <option value="Medenine">مدنين</option>
          <option value="Monastir">المنستير</option>
          <option value="Nabeul">نابل</option>
          <option value="Sfax">صفاقس</option>
          <option value="Sidi Bouzid">سيدي بوزيد</option>
          <option value="Siliana">سليانة</option>
          <option value="Sousse">سوسة</option>
          <option value="Tataouine">تطاوين</option>
          <option value="Tozeur">توزر</option>
          <option value="Tunis">تونس</option>
          <option value="Zaghouan">زغوان</option>
        </Form.Select>
        <Form.Label htmlFor="" className="input" >
          الجنس
        </Form.Label>
        <Form.Select
          aria-label="الجنس"
          className="mt-3"
          onChange={handleChange}
          name="sexe"
        >
          <option>--</option>
          <option value="Masculin">ذكر</option>
          <option value="Féminin">أنثى</option>
        </Form.Select>
        <Form.Label className="input">الحالة المدنية </Form.Label>
        <Form.Select
          aria-label="الحالة المدنية "
          onChange={handleChange}
          name="etat_civile"
        >
          <option>--</option>
          <option value="">--</option>
          <option value="Célibataire">أعزب</option>
          <option value="marié">متزوج</option>
          <option value="Divorcé">مطلق</option>
        </Form.Select>
        <Form.Label htmlFor="" className="input">
          الجنسية
        </Form.Label>
        <Form.Select
          aria-label="الجنسية"
          onChange={handleChange}
          name="nationalite"
        >
          <option>--</option>
          <option value="Nationalité">تونسية</option>
          <option value="étranger">أجنبية</option>
        </Form.Select>
        <Form.Group >
          <Form.Label htmlFor="" className="input">العنوان</Form.Label>
          <Form.Control
            placeholder="العنوان"
            onChange={handleChange}
            name="adresse"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="" className="input">المدينة</Form.Label>
          <Form.Control
            placeholder="المدينة"
            onChange={handleChange}
            name="ville"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="" className="input">الترقيم البريدي</Form.Label>
          <Form.Control
            placeholder="الترقيم البريدي"
            onChange={handleChange}
            name="codepostal"
          />
        </Form.Group>
        <Form.Label htmlFor="" className="input">
          ولاية مقر الاقامة
        </Form.Label>
        <Form.Select
          aria-label="ولاية مقر الاقامة"
          onChange={handleChange}
          name="gouvernorat"
        >
          <option>مكان الولادة</option>
          <option value="--"></option>
          <option value="Ariana">أريانة</option>
          <option value="Béja">باجة</option>
          <option value="بن عروس">بن عروس"</option>
          <option value="بنزرت">بنزرت</option>
          <option value="Gabés">قابس</option>
          <option value="Gafsa">قفصة</option>
          <option value="Jendouba">جندوبة</option>
          <option value="Kairouan">قيروان</option>
          <option value="Kasserine">القصرين</option>
          <option value="Kebili">قبلي</option>
          <option value="Kef">الكاف</option>
          <option value="Mahdia">المهدية</option>
          <option value="La Manouba">منوبة</option>
          <option value="Medenine">مدنين</option>
          <option value="Monastir">المنستير</option>
          <option value="Nabeul">نابل</option>
          <option value="Sfax">صفاقس</option>
          <option value="Sidi Bouzid">سيدي بوزيد</option>
          <option value="Siliana">سليانة</option>
          <option value="Sousse">سوسة</option>
          <option value="Tataouine">تطاوين</option>
          <option value="Tozeur">توزر</option>
          <option value="Tunis">تونس</option>
          <option value="Zaghouan">زغوان</option>
        
        </Form.Select>
        <Form.Group >
          <Form.Label htmlFor="" className="input">البريد الإلكتروني</Form.Label>
          <Form.Control
            type="email"
            placeholder="البريد الإلكتروني"
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label htmlFor="" className="input">المحمول</Form.Label>
          <Form.Control
            type="tel"
            placeholder="المحمول"
            onChange={handleChange}
            name="tel"
          /><div className='space'></div>
        </Form.Group>
        <Button 
          variant="secondary"
          type="submit"
          className="bouton-page"
          onClick={handleEtudiant}
        >
          
          تسجيل
        </Button>
      </Form>
    </div>
  );
};

export default Register;
