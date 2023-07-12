'use client'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, className }) => {
  return (
    <div className={`${className && ''}`}>
      <div className={`${center ? 'text-center' : ''} uppercase font-semibold`}>
        {title}
      </div>
      <div className="font-light mt-2">
        {subtitle}
      </div>
    </div>
  )
};

export default Heading;
