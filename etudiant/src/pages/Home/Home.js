import React from 'react'
import ReactPlayer from 'react-player'
import '../../component/style.css'
const Home = () => {
  return (
    <div>
      <div><table class="table table-bordered">
  <thead>
    <tr className='th'>
     
      <th scope="col"></th>
      <th scope="col" >آجال التّسجيل</th>
      <th scope="col" className='th'>المناظرة</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr className='img-thumbnail'>
      
      <td className='td'><a href='/Avis_mutation_2021.pdf' target="_blank">تحميل البلاغ</a></td>
      <td className='td'>2022-07-04 إلى 25-07-202</td>
      <td className='td'>النقلة إلى إحدى مؤسسات جامعة تونس المنار في نفس الإختصاص</td>
    </tr>
    <tr>
     
    <td className='td'><a href='/img/Avis_mutation_2021.pdf' target="_blank">تحميل البلاغ</a></td>
      <td className='td'>25-05-2022 إلى25-07-2022</td>
      <td className='td'>إدماج الطلبة الذين استوفوا حقهم في التسجيل بالمراحل التحضيرية للدراسات الهندسية في مستوى السّنة الأولى والسّنة الثّانية</td>

    </tr>
   
  </tbody>
</table ></div><div className='h6'><h6>طريقة التّسجيل على منظومة المناظرات بالملفّات الخاصّة بالطّلبة</h6></div>
   <div className='video'><ReactPlayer url='https://www.youtube.com/watch?v=VuSu9-VZVqA&t=8s' controls={true}  /></div>
 </div>

   
  )
}

export default Home