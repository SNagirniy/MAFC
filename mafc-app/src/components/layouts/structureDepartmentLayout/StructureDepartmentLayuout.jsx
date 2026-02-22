'use client'
import SectionWrapper from '../SectionWrapper';
import s from './structure_department.module.scss';
import Link from 'next/link';
import { v4 } from 'uuid';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Arrow from '../../../../public/arrow.svg';

const StructureDepartmentLayout=({rootPath,page_title,nav_list,children})=>{
    const [isOpen, setIsOpen] = useState(false);


    const toggleAsideMenu = ()=> {
        setIsOpen(!isOpen)
    }

    const onCloseSideMenu =()=> {
        setIsOpen(false)
    }

    const pathname = usePathname();


    return (
        <section className={s.section}>
            <SectionWrapper>
                <div className={s.grid_container}>
                    <aside className={ clsx(s.aside, {[s.open] : isOpen})}>
                        
                        <nav className={s.page_nav}>
                            <h3 className={s.menu_title}>{page_title}</h3>
                                {nav_list?.map((unit)=> {
                                       
                                       const href = `${rootPath}${unit?.link}`
                                        const isActive = pathname === href;
                                        return (
                                            <div key={v4()}>
                                                {unit?.link? <Link onClick={onCloseSideMenu} className={clsx(s.unit_title, s.link_title, {[s.active] : isActive})} href={`${rootPath}${unit?.link}`}>{unit?.unit_title}</Link> : (unit?.unit_title && <h4 className={s.unit_title} >{unit?.unit_title}</h4>)}
                                                {unit?.departments && <ul className={s.nav_list}>
                                                   {unit?.departments?.map((d)=> {
                                                    const href = d?.link ? `${rootPath}${d?.link}` : d?.external_link;
                                                     const isActive = pathname === href;
                                                        return <li key={v4()}>
                                                        <Link target={d?.link? '_self' : '_blank'} onClick={onCloseSideMenu} className={clsx(s.link, {[s.active]: isActive})} href={href}>{d?.title}</Link>
                                                    </li>
                                                   })
                                                    }
                                                </ul>}
                                            </div>
                                        )
                                })}
                            
                        </nav>

                        <button 
                        onClick={toggleAsideMenu}
                        className={s.open_btn}> 
                        <Arrow className={s.open_icon}/>
                        </button>
                    </aside>
                    <article className={s.article}>
                        {children}
                    </article>
                </div>

            </SectionWrapper>
        </section>
    )

};

export default StructureDepartmentLayout;