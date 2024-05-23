import React from 'react'
import './hola.css'
import img1 from './images/course1.jpg'

import img2 from './images/course2.jpg';
import img3 from './images/course3.jpg';
import av1 from './images/avatar1.jpg'
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
                    <img src="https://cinar00-education-website-html-css-js.netlify.app/images/header.svg" alt=""/>
                </div>
            </div>
        </div>
    </header>
    <br /><br /><br />
      
    <section class="categories">
        <div class="container categories__container">
            <div class="categories__left">
                <h1>Categories</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Architecto praesentium facilis voluptatum illum blanditiis 
                    distinctio nulla quisquam enim quos fugit accusamus, nesciunt 
                    doloremque tempora quod quo incidunt sint! Iure, reiciendis!
                </p>
                <a href="#" class="btn">Learn More</a>
            </div>

            <div class="categories__right">
                <article class="category">
                    <span class="category__icon"><i class="uil uil-bitcoin-circle"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article class="category">
                    <span class="category__icon"><i class="uil uil-palette"></i></span>
                    <h5>Graphic Desing</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article class="category">
                    <span class="category__icon"><i class="uil uil-usd-circle"></i></span>
                    <h5>Finance</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article class="category">
                    <span class="category__icon"><i class="uil uil-megaphone"></i></span>
                    <h5>Marketing</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article class="category">
                    <span class="category__icon"><i class="uil uil-music"></i></span>
                    <h5>Music</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
                
                <article class="category">
                    <span class="category__icon"><i class="uil uil-puzzle-piece"></i></span>
                    <h5>Business</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
                </article>
            </div>
        </div>
    </section> 
        



    <section class="courses">
        <h2>Our Popular Courses</h2>
        <div class="container courses__container">
            <article class="course">
                <div class="course__image">
                    <img src={img1 } alt='hello'/>
                </div>
                <div class="course__info">
                    <h4>Responsive Social Media Website UI Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Rerum ab, nisi iusto nemo aut debitis maiores.
                    </p>
                    <a href="courses.html" class="btn btn-primary">Learn More</a>
                </div>
            </article>

            <article class="course">
                <div class="course__image">
                    <img src={img2}/>
                </div>
                <div class="course__info">
                    <h4>Responsive SmartHome Website Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Rerum ab, nisi iusto nemo aut debitis maiores.
                    </p>
                    <a href="courses.html" class="btn btn-primary">Learn More</a>
                </div>
            </article>
        
            <article class="course">
                <div class="course__image">
                    <img src={img3}/>
                </div>
               <div class="course__info">
                    <h4>Responsive Admin Dashboard UI Design</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Rerum ab, nisi iusto nemo aut debitis maiores.
                    </p>
                    <a href="courses.html" class="btn btn-primary">Learn More</a>
               </div>
            </article>        
        </div>
    </section>

       




    <section class="faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="container faqs__container">
            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Why Should I Prefer This Site?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>How Do I Know The Right Courses For Me?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>What are the Prices of Your Package Web Software?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>How is Credit Card Security Provided on Your Site?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Can I Manage My Web Site Myself?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>
            
            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Are Your Website Compatible With Search Engines?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>How is Credit Card Security Provided on Your Site?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Are There Any Problems With Your Servers?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Can I Manage My Web Site Myself?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Can We Use Multiple Domain Names / Domains?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Dolor velit ut placeat fugit molestias quo 
                        repellendus quod, ab aliquam consequatur, harum 
                        dignissimos doloremque odit illo nesciunt beatae 
                        nemo quidem est.
                    </p>
                </div>
            </article>
        </div>
    </section>

       
       


    <section class="container testimonials__container mySwiper">
        <h2>Student's Testimonials</h2>
        <div class="swiper-wrapper">
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src={av1}/>
                </div>
                <div class="testimonial__info">
                    <h5>Tanya Black</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, inventore explicabo eveniet   voluptatem dolor labore 
                        sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi 
                        consequuntur voluptatum explicabo placeat error nam.
                    </p>
                </div>
            </article>

            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="./images/avatar5.jpg"/>
                </div>
                <div class="testimonial__info">
                    <h5>Jane Doe</h5>
                    <small>Web Developer</small>
                </div>
                <div class="testimonial__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, inventore explicabo eveniet voluptatem dolor labore 
                        sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi 
                        consequuntur voluptatum explicabo placeat error nam.
                    </p>
                </div>
            </article>
            
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="./images/avatar6.jpg"/>
                </div>
                <div class="testimonial__info">
                    <h5>Anne Rose</h5>
                    <small>Fashion Designer</small>
                </div>
                <div class="testimonial__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, inventore explicabo eveniet voluptatem dolor labore 
                        sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi 
                        consequuntur voluptatum explicabo placeat error nam.
                    </p>
                </div>
            </article>
            
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="./images/avatar3.jpg"/>
                </div>
                <div class="testimonial__info">
                    <h5>Edem Quist</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, inventore explicabo eveniet voluptatem dolor labore 
                        sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi 
                        consequuntur voluptatum explicabo placeat error nam.
                    </p>
                </div>
            </article>
            
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="./images/avatar1.jpg"/>
                </div>
                <div class="testimonial__info">
                    <h5>Clara Faya</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, inventore explicabo eveniet voluptatem dolor labore 
                        sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi 
                        consequuntur voluptatum explicabo placeat error nam.
                    </p>
                </div>
            </article>
            
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="./images/avatar2.jpg"/>
                </div>
                <div class="testimonial__info">
                    <h5>Ernest Achiever</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, inventore explicabo eveniet voluptatem dolor labore 
                        sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi 
                        consequuntur voluptatum explicabo placeat error nam.
                    </p>
                </div>
            </article>
        </div>
         <div class="swiper-pagination"></div>
    </section>




    </div>
  )
}

export default Home