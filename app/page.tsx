import Image from "next/image";
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <div className='bg-background w-full h-screen'>
      <div className='max-w-[1440px] m-auto flex'>
        <figure className="w-[402px] h-[105px] mt-[26px]"></figure>
        <Navbar />
      </div>
    </div>
  );
}
