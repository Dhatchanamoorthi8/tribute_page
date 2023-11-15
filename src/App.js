import './Main.css';
import { Link } from "react-router-dom";
import { GitHub } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <div className="header container border mt-1  p-0 rounded  rounded-1 ">
        <h3>Dr. A. P. J. Abdul Kalam</h3>
        <p className='text-muted'>Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007.</p>

        <div className="images container-fluid bg-light m-0 p-0">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={require("../src/assets/img/1 (1).jfif")} class="img-fluid " alt="apj abdul kalam" />
              </div>
              <div class="carousel-item">
                <img src={require("../src/assets/img/1 (4).jfif")} class="img-fluid" alt="apj abdul kalam" />
              </div>
              <div class="carousel-item active ">
                <img src={require("../src/assets/img/1 (3).jfif")} class="img-fluid" alt="apj abdul kalam" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-black rounded-1 " aria-hidden="true"></span>
              <span class="visually-hidden ">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-black rounded-1" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>













        </div>

        
        <div className="body-content">

        <h4 className='title-1 mt-4 mb-5'>Timeline of Dr. A. P. J. Abdul Kalam</h4>

         <ul className='ul-1 ps-lg-5 ps-4'>1931 - Birth :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>October 15, 1931: Born in Rameswaram, Tamil Nadu, India.</li>
         </ul>

         <ul className='ul-2 ps-lg-5 ps-4'>1954 - Education :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Graduated in Physics from St. Joseph's College, Tiruchirappalli.</li>
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Studied aerospace engineering at the Madras Institute of Technology.</li>
         </ul>

         <ul className='ul-3 ps-lg-5 ps-4'>1960s - Early Career :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Joined DRDO as a scientist, contributing to India's satellite launch vehicle program.</li>
         </ul>

         <ul className='ul-4 ps-lg-5 ps-4'>1969 - ISRO Contribution :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Transferred to the Indian Space Research Organisation (ISRO) and worked on India's first satellite, Aryabhata.</li>
         </ul>

         <ul className='ul-5 ps-lg-5 ps-4'>1970s - SLV and Satellite Launch :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Contributed to the Satellite Launch Vehicle (SLV) project, making India one of the few countries with indigenous satellite launch capabilities.</li>
         </ul>

         <ul className='ul-6 ps-lg-5 ps-4'>1980s - Missile Program Leadership :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Headed India's missile development program, leading to the successful development of Agni and Prithvi missiles.</li>
         </ul>

         <ul className='ul-7 ps-lg-5 ps-4'>1990 - Kargil Conflict :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Played a crucial role during the Kargil conflict by providing technical and logistical support to the Indian armed forces.</li>
         </ul>

         <ul className='ul-8 ps-lg-5 ps-4'>1992 - Padma Bhushan :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Received the Padma Bhushan for his exceptional work in the field of science and engineering.</li>
         </ul>

         <ul className='ul-9 ps-lg-5 ps-4'>1997 - Bharat Ratna :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Awarded the Bharat Ratna, India's highest civilian honor, for his outstanding contribution to national development.</li>
         </ul>

         <ul className='ul-10 ps-lg-5 ps-4'>2002 - Presidency :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Elected as the 11th President of India, serving from 2002 to 2007.</li>
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark  '>Became the first scientist and the first bachelor to hold the office of the President.</li>
         </ul>

         <ul className='ul-11 ps-lg-5 ps-4'>Storng Post-Presidency Activities :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Devoted his post-presidential years to education, writing, and inspiring the youth through lectures and speeches.</li>
         </ul>

         <ul className='ul-12 ps-lg-5 ps-4'>2011 - Mobile Missile Launcher :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Unveiled the indigenously developed mobile missile launcher, enhancing India's defense capabilities.</li>
         </ul>

         <ul className='ul-13 ps-lg-5 ps-4'>2012 - The Kalam-Raju Stent :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Inaugurated the Kalam-Raju Stent, a cardiovascular stent designed for the treatment of coronary artery disease.</li>
         </ul>

         <ul className='ul-14 ps-lg-5 ps-4'>2014 - My Journey: Transforming Dreams into Actions :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Published his autobiography, "My Journey: Transforming Dreams into Actions," sharing insights into his life and vision.</li>
         </ul>

         <ul className='ul-14 ps-lg-5 ps-4'>2015 - Passing :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>July 27, 2015: Dr. Kalam passed away while delivering a lecture at the Indian Institute of Management Shillong.</li>
         </ul>

         <ul className='ul-14 ps-lg-5 ps-4'>Legacy :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Remembered for his vision for India's development, his commitment to education, and his inspirational speeches.</li>
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4  text-dark '>Several institutions and awards are named in his honor.</li>
         </ul>

         <ul className='ul-14 ps-lg-5 ps-4'>Quotes :
         <li className='ms-3 ms-lg-5 ms-md-5 ms-sm-4 text-dark '>Some of his famous quotes include <span className='text-dark'> "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action,"</span> and &nbsp; 
         <span className='text-dark'>"If you want to shine like the sun, first burn like the sun."</span> </li>
         </ul>

        </div>

        <div className="footer-end m-0 p-0 mt-5">
        <p className='p-3'>© Developed By <strong>Dhatchana moorthi</strong>.</p>

        <Link to="https://github.com/Dhatchanamoorthi8?tab=repositories" className='nav-link'>
  <span class="d-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></span> <span className=''>View GitHub Respository</span></Link>
            
        </div>

      </div>

    </div>
  );
}

export default App;
