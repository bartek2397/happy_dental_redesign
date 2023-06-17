'use client'

interface HeadingProps {
    title: string;
    subtitle?: string;
    
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle}) => {
  return (
    <div>
      <div className="">
        {title}
      </div>
      <div className="font-light mt-2">
        {subtitle}
      </div>
    </div>
  )
};

export default Heading;
