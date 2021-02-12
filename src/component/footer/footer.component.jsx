
import Logo from '../logo/logo.component'; 

import { ReactComponent as FacebookIcon } from '../../images/facebook_icon.svg';
import { ReactComponent as InstaIcon } from '../../images/insta_icon.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter_icon.svg';
import { ReactComponent as YoutubeIcon } from '../../images/youtube_icon.svg';

const Footer = () => {
   return (
      <div className="mt-16 text-lightHeadings"> 
         <div className="bg-secondary">
            <div className="flex flex-col items-center justify-center pb-8 mx-auto text-sm w-90 sm:h-80">
               <Logo light={true} /> 
               <p className="mb-5">Follow Us On</p>
               <ul className="flex justify-between gap-6 md:gap-8">
                  <li className="transform duration-.3s ease-custom hover:scale-95">
                     <a href="https://www.facebook.com" target="_black"><FacebookIcon className="w-10 h-10 md:w-14 md:h-14" /></a>
                  </li>
                  <li className="transform duration-.3s ease-custom hover:scale-95">
                     <a href="https://www.instagram.com" target="_black"><InstaIcon className="w-10 h-10 md:w-14 md:h-14" /></a>
                  </li>
                  <li className="transform duration-.3s ease-custom hover:scale-95">
                     <a href="https://twitter.com" target="_black"><TwitterIcon className="w-10 h-10 md:w-14 md:h-14" /></a>
                  </li>
                  <li className="transform duration-.3s ease-custom hover:scale-95">
                     <a href="https://www.youtube.com"  target="_black"><YoutubeIcon className="w-10 h-10 md:w-14 md:h-14" /></a>
                  </li>
               </ul>
            </div>
         </div>
         <div style={{ backgroundColor: '#5C5C5C' }} >
            <p className="py-4 mx-auto text-xs text-center w-90 sm:text-sm">
               Made By Pratik Chauhan, Github Respository : <a href="https://github.com/Pratik9999/famous-destination" target="_black" className="underline">Famous Desitnation</a>
            </p> 
         </div>
      </div>
   );
}
 
export default Footer;