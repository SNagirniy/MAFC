'use client'
import s from './navigation.module.scss';
import { v4 } from 'uuid';
import Link from 'next/link';
import Burger from '../../../../public/burger.svg';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';
import nav_structure from '@/utils/nav_structure';

import { useState, useEffect,useRef } from 'react';



const Navigation =()=> {
const[isMenuOpen, setIsMenuOpen]= useState(false);
const [openDropdown, setOpenDropdown] = useState(null);
 const {width}= useWindowSize();

const ref = useRef();

const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
};
  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };



const onClick = ()=> {
    setIsMenuOpen(false)
    setOpenDropdown(null)
}


useEffect(() => {
      const handleClick = event => {
        const { target } = event;
        if (target instanceof Node && !ref.current?.contains(target)) {
          isMenuOpen && setIsMenuOpen(false);
        }
      };
  
      window.addEventListener('click', handleClick, true);
  
      return () => {
        window.removeEventListener('click', handleClick, true);
      };
    }, [isMenuOpen]);

    useEffect(()=> {
        if(width >=1280) { setIsMenuOpen(false)}
    }, [width]);

return(
    <nav ref={ref} className={s.nav_box}>
        <button 
        aria-expanded={isMenuOpen} 
        aria-label="Відкрити меню" 
        onClick={toggleMenu} 
        className={ clsx(s.burger,{[s.open]:isMenuOpen})}>
            <Burger className={ clsx(s.burger_btn)}/>
        </button>
       
        <ul className={s.list}>
        {nav_structure?.map(({title, menu})=>{ return (
            <li key={v4()} className={s.list_item}>
                <button 
                onClick={(e) => {e.stopPropagation(),toggleDropdown(title)}} 
                aria-expanded={openDropdown === title}
                aria-haspopup="true"
                className={s.triger}>{title}
                </button>
                <ul role="menu" className={clsx(s.dropdown, {
                [s.open]: openDropdown === title
              })}>
                {menu?.map((item)=> <li role="menuitem" key={item.item}>
                <Link onClick={onClick} className={s.link} href={item.link}>{item.item}</Link>
                    </li>)}
                </ul>
            </li>)})}
        </ul>
    </nav>
)
};




export default Navigation;