import Image from 'next/image'
 import img from './imegs/car.jpg'
export default function IndexPage () {
  return (
    <div className='flex align-center justify-center'>
    <Image
      src={img}
      alt="Picture of the author"
      width={500}
      height={400}
    />
    </div>
  )
}
 
// export default IndexPage