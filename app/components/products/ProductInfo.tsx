'use client'

interface ProductInfoProps {
    code?: string;
    weight?: string;
    manufacturer?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ code, weight, manufacturer }) => {
  return (
    <div>
        <ul className="flex flex-col text-[0.9rem]">
            <li>{code ? 'Product Code: ' + code : null}</li>
            <li>{weight ? 'Weight: ' + weight : null}</li>
            <li>{manufacturer ? 'Manufacturer: ' + manufacturer : null}</li>
        </ul>
    </div>
  )
}

export default ProductInfo