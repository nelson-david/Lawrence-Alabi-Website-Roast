import InstagramIcon from "../icons/InstagramIcon";
import XIcon from "../icons/XIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const iconSize = { width: 30, height: 30 };

const socials = [
    {
        name: "x",
        icon: <XIcon size={iconSize} />,
        link: "https://www.twitter.com/@the_Lawrenz",
    },
    {
        name: "Youtube",
        icon: <YoutubeIcon size={iconSize} />,
        link: "https://youtube.com/@Renzandmo?si=RJPV_uvOSe7u_EvL",
    },
    {
        name: "Instagram",
        icon: <InstagramIcon size={iconSize} />,
        link: "https://www.instagram.com/the_lawrenz",
    },
];

export { socials };
