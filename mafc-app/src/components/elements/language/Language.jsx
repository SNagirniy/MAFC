'use client'

import En from '../../../../public/en.svg';
import Uk from '../../../../public/uk.svg';
import s from './language.module.scss';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

const localesList = {
   uk: {locale: 'uk',
    icon: <Uk className={s.icon}/>},
   en: {
    locale: 'en',
    icon: <En className={s.icon}/>
}};


const Language = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const [locale, setLocale] = useState('uk');
    const rootRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  
    const handleChangeLang = e => {
        const lang = e.currentTarget?.id;
        setLocale(lang)
        toggleDropdown();
    };
  
    useEffect(() => {
      const handleClick = event => {
        const { target } = event;
        if (target instanceof Node && !rootRef.current?.contains(target)) {
          isOpen && setIsOpen(false);
        }
      };
  
      window.addEventListener('click', handleClick);
  
      return () => {
        window.removeEventListener('click', handleClick);
      };
    }, [isOpen]);

    const FreeLocale = Object.keys(localesList)?.filter((el) => el !== locale);

return(

<div onClick={toggleDropdown} className={s.container}>
<div ref={rootRef} className={s.item}>
    {localesList[locale].icon}
   
</div>

  <ul className={clsx(s.dropdown, {[s.open]: isOpen})}>

    {FreeLocale?.map((el)=> {return (
        <li
        id={el}
        key={el}
        className={s.item}
        onClick={handleChangeLang}
      >
        <div className={s.btn}>
        {localesList[el].icon}
        </div>
      </li>
    )}) }
     
  
  </ul>

</div>)};

export default Language;