import { Link } from 'react-router-dom';

const Logo = ({ light }) => {
   return (
      <div className={`flex justify-center py-6 mx-auto ${light ? 'sm:py-5' : 'sm:py-10' } w-90 md:container`}>
         <Link to="/" className={`${light ? 'text-lightHeadings' : ''} flex flex-col items-center justify-center`}>
            <h1 className='text-3xl sm:mb-1 sm:text-4xl md:text-5xl font-logo text-shadow-md'>Famous Destination</h1>
            <p className="text-base italic font-normal font-sub-headings md:text-xl text-shadow-sm ">smart pepole choose destination</p>
         </Link> 
      </div>
   );
}
 
export default Logo;