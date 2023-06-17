'use client'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center}) => {
  return (
    <div>
      <div className={center ? 'text-center' : 'text-start'}>
        {title}
      </div>
      <div className="font-light mt-2">
        {subtitle}
      </div>
    </div>
  )
};

export default Heading;