import Instagram from '../../public/instagram.svg';
import Facebook from '../../public/facebook.svg';
import Tiktok from '../../public/tiktok.svg';
import Youtube from '../../public/youtube.svg';

const socialLinks = [
    {icon: (style) =><Instagram className={style}/>,
     alt: 'Instagram',
     url: '/'
    },
   
       {icon: (style)=> <Facebook className={style}/>,
        alt: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=100024298360159'
       },
       {icon: (style)=> <Tiktok className={style}/>,
        alt: 'TikTok',
        url: '/'
       },
       {icon:(style)=> <Youtube className={style}/>,
       alt: 'Youtube',
       url: '/'
      },
];


export default socialLinks;