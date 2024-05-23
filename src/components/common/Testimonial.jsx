import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import director from './here/diretor.jpg'
import mule from './here/mulualem.jpg'
import wak from './here/wakijira.jpg'
import zewu from './here/zewude.jpg'
const TestimonialSection = () => {
    const testimonials = [
        {
            imgSrc: director,
            name: 'ደለለኝ አስማረ',
            position: 'ዋና ርዕሰ መምህር',
        },
        {
            imgSrc: wak,
            name: 'ዋቅጅራ ረጋሳ',
            position: 'የትምህርት ቤቱ የትምህርት መሻሻል',
        },
        {
            imgSrc: zewu,
            name: 'ዘውዴ ተሾመ',
            position: 'የትምህርት ቤቱ መምህራን ልማት',
        },
        {
            imgSrc: mule,
            name: 'ሙሉአለም ሃይሉ',
            position: 'የትምህርት ቤቱ ስርአተ ትምህርት',
        },
    ];

    return (
        <div className="container-xxl py-5 bg-white-200 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container mx-auto">
                <h1 className="text-center mb-5 text-3xl font-bold">የትምህርት ቤቱ አስተዳደሮች</h1>
                <div className="flex flex-wrap justify-center items-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item bg-gray-100 rounded p-4 text-center m-2">
                            <FaQuoteLeft className="text-primary fa-2x mb-3" />
                            <div className="flex justify-center items-center">
                                <img className="img-fluid rounded-full w-40 h-40 object-cover" src={testimonial.imgSrc} alt={`Image ${index + 1}`} />
                                <div className="pl-3">
                                    <h5 className="mb-1 font-semibold text-gray-800">{testimonial.name}</h5>
                                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
