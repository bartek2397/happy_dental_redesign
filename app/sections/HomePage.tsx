import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Navbar from "../components/navbar/Navbar";
import background from '../../images/unsplash_WFsNCIn8OF4.webp'
import Image from "next/image";

const HomePage = () => {
  return (
    <section className='bg-background max-w-full h-screen px-4 lg:px-8'>
          <Navbar />
        <div className='max-w-[1440px] m-auto h-[86%] relative'>
          <div className="absolute bottom-0 right-[50%] translate-x-[50%] w-[80%] ">
            <Image src={background} alt="Background"  />
          </div>
            
            <div className="flex justify-between pl-44 pr-64 pt-20 lg:flex-col lg:justify-center lg:pr-0 lg:pl-0 lg:items-center">
              <div className=' tracking-wider text-7xl font-heading font-bold text-white uppercase'>
                <Heading title='Healthy' />
              </div>
              <div className=' tracking-wider text-7xl font-heading font-bold text-white uppercase'>
                <Heading title='Clean' />
              </div>
            </div>
            <div className='xl:absolute xl:left-[8%] xl:top-[30%] w-[361px] lg:w-[50%] m-auto lg:text-center text-white text-right uppercase font-sans font-light text-2xl'>
              <Heading title='Your teeth will feel the difference' />
            </div>
            <div className='absolute bottom-20 md:bottom-[47%] right-0 md:right-[50%] md:translate-x-[50%] bg-[#E4EEE3] rounded-[50px]'>
              <Button label='Buy Now' onClick={() => {}} />
            </div>
            <div className='flex md:flex-col md:justify-center gap-4 absolute bottom-[10%] md:top-[40%] md:-translate-y-[50%]'>
              <span>
                <Link href='/'>
                  <BsFacebook size={32} color='#fff' />
                </Link>
              </span>
              <span>
                <Link href='/'>
                  <BsInstagram size={32} color='#fff' />
                </Link>
              </span>
              <span>
                <Link href='/'>
                  <BsYoutube size={32} color='#fff' />
                </Link>
              </span>
            </div>
        </div>
      </section>
  )
};

export default HomePage;
