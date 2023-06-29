import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Navbar from "../components/navbar/Navbar";
import background from "../../images/unsplash_WFsNCIn8OF4.webp";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className='bg-background max-w-full h-screen '>
      <div className='max-w-[1440px] m-auto h-[86%] relative px-4'>
        <div className='absolute bottom-0 right-[50%] translate-x-[50%] w-[80%] '>
          <Image src={background} alt='Background' />
        </div>

        <div className='max-w-[1332px] flex flex-col lg:flex-row gap-4 xl:gap-64 justify-center items-center pt-[20%] md:pt-[3%] '>
          <div className=' tracking-wider text-7xl font-heading font-bold text-white uppercase'>
            <Heading title='Healthy' />
          </div>
          <div className=' tracking-wider text-7xl font-heading font-bold text-white uppercase'>
            <Heading title='Clean' />
          </div>
        </div>
        <div className='w-[361px] mx-auto pt-4 text-white text-center uppercase font-sans font-light text-2xl xl:mx-32 xl:text-right'>
          <Heading title='Your teeth will feel the difference' />
        </div>
        <div className='absolute right-[50%] sm:bottom-10 sm:right-5 translate-x-[50%] sm:translate-x-0 mt-[10%] bg-[#E4EEE3] rounded-[50px]'>
          <Button label='Buy Now' onClick={() => {}} />
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4 absolute md:top-[90%] top-[40%] -translate-y-[50%]'>
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
  );
};

export default HomePage;
