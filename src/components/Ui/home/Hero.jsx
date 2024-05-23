import { Link } from 'react-router-dom';

// import illustrationIntro from '../assets/images/illustration-intro.svg';

const Hero = () => {
  return (
    <section id='hero' className='bg-white text-gray-700'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
        <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white'>
    Empowering Students for Success at Kokebe Tsibah School
  </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          At Kokebe Tsibah School, we provide a supportive learning environment
    where students can excel academically and personally. Our holistic approach
    to education fosters critical thinking, creativity, and collaboration,
    preparing students for future success in an ever-changing world.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-red-900 bg-gray-300 rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src="https://tailwind-landing-page-danielkim2711.vercel.app/static/media/illustration-intro.cb9a8a9551ca99f99a125230d38a2c36.svg" alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;