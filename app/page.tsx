import Image from "next/image";
import Navbar from '../components/navbar/Navbar'
import logo from '../images/logo.png'
import background from '../images/unsplash_WFsNCIn8OF4.png'

import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className='bg-background w-full h-screen'>
      <div className='max-w-[1440px] m-auto flex'>
        <figure className="w-[402px] h-[105px] mt-[26px]">
          <Image src={logo} alt="Logo" width={402} height={105} />
        </figure>
        <Navbar />
      </div>
      <div className="relative max-w-[1440px] m-auto translate-y-[17px]">
        <Image src={background} alt="Background" width={1440} />
        <div className="absolute top-[10%] left-[8%] tracking-wider text-[96px] font-heading font-bold text-white uppercase">
          <Heading title="Zdrowe" />
        </div>
        <div className="absolute top-[10%] right-[12%] tracking-wider text-[96px] font-heading font-bold text-white uppercase">
          <Heading title="Czyste" />
        </div>
        <div className="absolute top-[35%] w-[361px] left-0 text-white font-sans font-light text-[40px]">
          <Heading title="Twoje zęby poczują różnicę" />
        </div>
      </div>
    </div>
  );
}
