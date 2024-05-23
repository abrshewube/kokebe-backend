import React from 'react'
import './hola.css'
import img1 from './images/course1.jpg'

import img2 from './images/course2.jpg';
import img3 from './images/course3.jpg';
import av1 from './images/avatar1.jpg'
import school from './image/school.jpg'
import { FaHeadset, FaUserTie, FaBookReader, FaBook, FaLaptop, FaFlask  } from 'react-icons/fa';
import TestimonialSection from '../../common/Testimonial';
import im1 from './image/school.jpg'
import im2 from './image/IMG_20240404_121307_936.jpg'
import im3 from  './image/IMG_20240404_122110_889.jpg'
import im4 from './image/IMG_20240404_122117_207.jpg'
import FAQPage from '../../common/FAQ';
const Home = () => {
  return (
    <div class='body'>
<br /><br /><br /><br /><br />
      
    <header>
        <div class="container header__container">
            <div class="header__left">
                <h1>Kokoebe Tsibah School</h1>
                <p>
                Kokebe tsibah secondary school was founded by king haile Selassile Selassie in the year 
                1924 Ethiopian calendar. It is the 3rd High school in Ethiopia history it was the home for
                 many talented and famous people in the country due to the Italian occupation of Ethiopia.
                 
                 



                </p>
                <a href="courses.html" class="btn btn-primary">More About Our School</a>
            </div>

            <div class="header__right">
                <div class="header__right-image">
                    <img src={school} alt=""/>
                </div>
            </div>
        </div>
    </header>
   
    <br /><br /><br /><br />

      
    <section class="categories">
    <div class="container categories__container">
        <div class="categories__left">
            <h1>School Departments</h1>
            <p>
                Explore the various departments at Kokebe Tsibah Highschool, offering diverse fields of study and opportunities for academic growth and exploration.
            </p>
            <a href="#" class="btn">Learn More</a>
        </div>

        <div class="categories__right">
            <article class="category">
                <span class="category__icon"><i class="uil uil-bitcoin-circle"></i></span>
                <h5>Science</h5>
                <p class="small-char">Delve into the world of scientific inquiry and discovery, exploring biology, chemistry, physics, and more.</p>
            </article>
            
            <article class="category">
                <span class="category__icon"><i class="uil uil-palette"></i></span>
                <h5>Arts</h5>
                <p class="small-char">Cultivate creativity and artistic expression through various mediums including visual arts, music, and performing arts.</p>
            </article>
            
            <article class="category">
                <span class="category__icon"><i class="uil uil-usd-circle"></i></span>
                <h5>Finance</h5>
                <p class="small-char">Gain insights into financial management, investment strategies, and economic principles to prepare for a successful future in finance.</p>
            </article>
            
           
        </div>
    </div>
</section>
<br /><br /><br /><br />


<div className="container-xxl py-5 mx-auto text-gray-500">
            <div className="container mx-auto">
                <h1 className="text-center mb-5 animate__animated animate__fadeInUp text-white-900" data-wow-delay="0.1s">አጫጭር መረጃዎች</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4 block bg-white shadow-md hover:shadow-lg transition duration-300" href="#">
                            <FaHeadset className="text-primary mx-auto mb-4 h-12 w-12" />
                            <h6 className="text-center mb-3">የመምህራን ብዛት</h6>
                            <p className="text-center mb-0">246 መምህራንን የያዘ ትምህርት ቤት ነው::</p>
                        </a>
                    </div>
                    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4 block bg-white shadow-md hover:shadow-lg transition duration-300" href="#">
                            <FaUserTie className="text-primary mx-auto mb-4 h-12 w-12" />
                            <h6 className="text-center mb-3">የተማሪዎች ብዛት</h6>
                            <p className="text-center mb-0">2958 ተማሪዎችን የያዘ አንጋፋ ትምህርት ቤት ነው፡፡</p>
                        </a>
                    </div>
                    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4 block bg-white shadow-md hover:shadow-lg transition duration-300" href="#">
                            <FaBookReader className="text-primary mx-auto mb-4 h-12 w-12" />
                            <h6 className="text-center mb-3">የ መማሪያ ክላስ ብዛት </h6>
                            <p className="text-center mb-0">ሰፋፊ የመማሪያ ክላስ ያሉት ውብ ትምህርት ቤት ነው፡፡</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-xxl py-5 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                        <div className="grid grid-cols-2 gap-4 lg:gap-0">
                        <div className="flex justify-center lg:justify-start">
    <img className="img-fluid w-48 h-48" src={im1} alt="Image 1" />
</div>
<div className="flex justify-center lg:justify-start">
    <img className="img-fluid w-48 h-48" src={im2} alt="Image 2" />
</div>
<div className="flex justify-center lg:justify-end">
    <img className="img-fluid w-48 h-48" src={im3} alt="Image 3" />
</div>
<div className="flex justify-center lg:justify-end">
    <img className="img-fluid w-48 h-48" src={im4} alt="Image 4" />
</div>

                        </div>
                    </div>
                    <div className="wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">እንኳን ወደ ኮከበ ጽባህ ሁለተኛ ደረጃ ትምህርት ቤት ደህና መጡ ፡፡</h1>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ante nisi. Curabitur sagittis ultrices quam in hendrerit. Sed sit amet mi ultrices, aliquam enim et, malesuada odio.</p>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li className="flex items-center">
                                    <FaBook className="text-primary mr-2" /> 2 ቤተ መጽሃፍቶችን
                                </li>
                                <li className="flex items-center">
                                    <FaLaptop className="text-primary mr-2" /> 4 የ ኮምፒዩተር ቤተ ሙከራዎችን እና
                                </li>
                                <li className="flex items-center">
                                    <FaFlask className="text-primary mr-2" /> የባዮሎጂ ፤ኬሚስትሪ እና ፊዚክስ ቤተ ሙከራዎችን በውስጡ የያዘ ድንቅ ትምህርት ቤት ነው፡፡
                                </li>
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    

       

<TestimonialSection/>
<FAQPage/>

<br /><br />

    </div>
  )
}

export default Home