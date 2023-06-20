import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Navbar from "../components/navbar/Navbar";
import background from '../../images/unsplash_WFsNCIn8OF4.webp'
import Image from "next/image";

const HomePage = () => {
  return (
    <section className='bg-background max-w-full h-screen lg:px-8'>
          <Navbar />
        <div className='max-w-[1440px] m-auto h-[86%] relative'>
          <div className="absolute bottom-0 right-[50%] translate-x-[50%] w-[80%] ">
            <Image src={background} alt="Background"  />
          </div>
            
            <div className='absolute top-[12%] lg:top-[8%] left-[2%] lg:left-[18%] tracking-wider text-[96px] lg:text-[64px] font-heading font-bold text-white uppercase'>
              <Heading title='Healthy' />
            </div>
            <div className='absolute top-[12%] lg:top-[8%] right-[10%] lg:right-[24%] tracking-wider text-[96px] lg:text-[64px] font-heading font-bold text-white uppercase'>
              <Heading title='Clean' />
            </div>
            <div className='absolute top-[30%] lg:left-[15%] w-[361px] lg:w-[240px] text-white text-right uppercase font-sans font-light text-[40px] lg:text-[24px]'>
              <Heading title='Your teeth will feel the difference' />
            </div>
            <div className='absolute bottom-20 right-0 bg-[#E4EEE3] rounded-[50px]'>
              <Button label='Buy Now' onClick={() => {}} />
            </div>
            <div className='flex w-[142px] justify-between absolute bottom-[10%]'>
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
