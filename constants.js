import tooth from './images/mdi_tooth-outline.png'
import waves from './images/mingcute_wave-line.png'
import toothpaste from './images/mdi_toothbrush-paste.png'
import bottle from './images/icon-park-solid_bottle-two.png'
import drop from './images/mdi_water-outline.png'
import strings from './images/file-icons_strings.png'
import leaf from './images/tabler_leaf.png'
import bear from './images/mdi_child-toy.png'
import box from './images/solar_box-outline.png'
import shield from './images/mingcute_shield-line.png'
import letter from './images/fa6-solid_a.png'
import dots from './images/tabler_dots.png'

import Image from 'next/image'

const categories = [
    {
        id: 1,
        title: 'Szczoteczki eletktryczne',
        icon: 
        <>
            <Image src={tooth} alt='Electric toothbrushes' width={136} height={136}/>
        </>
    },
    {
        id: 2,
        title: 'Szczoteczki soniczne',
        icon: 
        <>
            <Image src={waves} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
    {
        id: 3,
        title: 'Pasty do zębów',
        icon: 
        <>
            <Image src={toothpaste} alt='Toothbrush paste' width={136} height={136} />
        </>
    },
    {
        id: 4,
        title: 'Płyny do higieny jamy ustnej',
        icon: 
        <>
            <Image src={bottle} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
    {
        id: 5,
        title: 'Irygatory do zębów',
        icon: 
        <>
            <Image src={drop} alt='Electric toothbrushes' width={193} height={193}/>
        </>
    },
    {
        id: 6,
        title: 'Nici dentystyczne',
        icon: 
        <>
            <Image src={strings} alt='Electric toothbrushes' width={120} height={120} />
        </>
    },
    {
        id: 7,
        title: 'Produkty naturalne',
        icon: 
        <>
            <Image src={leaf} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
    {
        id: 8,
        title: 'Dla dzieci',
        icon: 
        <>
            <Image src={bear} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
    {
        id: 9,
        title: 'Oferta hurtowa',
        icon: 
        <>
            <Image src={box} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
    {
        id: 10,
        title: 'Stomatolog',
        icon: 
        <>
            <Image src={shield} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
    {
        id: 11,
        title: 'Marki A-Z',
        icon: 
        <>
            <Image src={letter} alt='Electric toothbrushes' width={120} height={136} />
        </>
    },
    {
        id: 12,
        title: 'Więcej',
        icon: 
        <>
            <Image src={dots} alt='Electric toothbrushes' width={136} height={136} />
        </>
    },
]

export default categories;