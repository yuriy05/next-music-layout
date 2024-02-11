import Link from "next/link";
import {RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill} from "react-icons/ri"

const socials = [
 {
   path: "#",
   icon: <RiYoutubeFill/> 
 },
 {
   path: "#",
   icon: <RiInstagramFill/> 
 },
 {
   path: "#",
   icon: <RiSpotifyFill/> 
 },
 {
   path: "#",
   icon: <RiSoundcloudFill/> 
 },
];

const Socials = ({containerStyle, iconStyles}) => {
    return (
        <div className={`${containerStyle}`}>
            {socials.map((item, index) => {
                return (
                 <Link href={item.path} key={index}>
                    <div className={`${iconStyles}`}>{item.icon}</div>
                </Link>
                )
            })}
        </div>
    )
}

export default Socials;