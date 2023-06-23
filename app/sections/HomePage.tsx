import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Navbar from "../components/navbar/Navbar";
import background from "../../images/unsplash_WFsNCIn8OF4.webp";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className='bg-background max-w-full h-screen px-4 '>
      <Navbar />
      <div className='max-w-[1440px] m-auto h-[86%] relative'>
        <div className='absolute bottom-0 right-[50%] translate-x-[50%] w-[80%] '>
          <Image src={background} alt='Background' />
        </div>

        <div className='flex flex-col gap-4 justify-center items-center pt-[10%] sm:pt-[5%] md:pt-[0%]'>
          <div className=' tracking-wider text-7xl font-heading font-bold text-white uppercase'>
            <Heading title='Healthy' />
          </div>
          <div className=' tracking-wider text-7xl font-heading font-bold text-white uppercase'>
            <Heading title='Clean' />
          </div>
        <div className='w-[361px] mx-auto pt-4 text-white text-center uppercase font-sans font-light text-2xl'>
          <Heading title='Your teeth will feel the difference' />
        </div>
        <div className=' md:absolute md:bottom-20 md:right-0 bg-[#E4EEE3] rounded-[50px]'>
          <Button label='Buy Now' onClick={() => {}} />
        </div>
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
