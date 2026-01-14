'use client'

import En from '../../../../public/en.svg';
import Uk from '../../../../public/uk.svg';
import s from './language.module.scss';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

const localesList = {
   uk: {locale: 'uk',
    icon: <Uk className={s.icon}/>,
   label: 'Українська'}
    ,
   en: {
    locale: 'en',
    icon: <En className={s.icon}/>,
     label: 'English'
}};

function translatePage(lang) {
  const cookieValue = `/uk/${lang}`
  document.cookie = `googtrans=${cookieValue};path=/;domain=${window.location.hostname}`
  document.cookie = `googtrans=${cookieValue};path=/`

  const select = document.querySelector('.goog-te-combo')
  if (select) {
    select.value = lang
    select.dispatchEvent(new Event('change'))
  } else {
    console.warn('Selector not found — fallback reload')
    window.location.reload()
  }
}

const Language = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const [locale, setLocale] = useState('uk');
    const rootRef = useRef(null);
    const buttonRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  
    const handleChangeLang = e => {
        const lang = e.currentTarget?.value;
        setLocale(lang)
        translatePage(lang)
        toggleDropdown()
        buttonRef.current?.focus()

    };

      useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('googtrans='));
    if (cookie) {
      const langCode = cookie.split('/').pop();
      if (langCode && localesList[langCode]) {
        setLocale(langCode);
      }
    }
  }, []);



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

<div ref={rootRef} className={s.container}>
<button 
  onClick={toggleDropdown}
   className={s.item}
  aria-haspopup="listbox"
  aria-expanded={isOpen}
  aria-label={`Поточна мова: ${localesList[locale].label}`}>
    {localesList[locale].icon}
   
</button>

  <ul 
      role="listbox"
      aria-label="Вибір мови сайту"
      className={clsx(s.dropdown, {[s.open]: isOpen})}>

    {FreeLocale?.map((el)=> {return (
        <li
        id={el}
        key={el}
        className={s.item}
        role="option" aria-selected={locale === el}
       
      >
        <button className={s.btn}
          value={el}
          type='button'
          onClick={handleChangeLang}
          aria-label={`Змінити мову на ${localesList[el].label}`}>
        {localesList[el].icon}
        <span className={s.sr_only}>{localesList[el].label}</span>
        </button>
      </li>
    )}) }
     
  
  </ul>

</div>)};

export default Language;