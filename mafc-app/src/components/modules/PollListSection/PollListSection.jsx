"use client"
import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './poll_list_section.module.scss';
import { v4 } from 'uuid';
import { Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import ChevronDown from '../../../../public/chevron_down.svg';
import DocumentsList from '@/components/elements/DocumentsList/DocumentsList';


const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {<span>{header}</span>}
          <ChevronDown className={s.chevron}/>
          
        </>
      }
      className={s.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${s.itemBtn} ${isEnter && s.itemBtnExpanded}`,
      }}
      contentProps={{ className: s.itemContent }}
      panelProps={{ className: s.itemPanel }}
    />
  );


const PollListSection =({title,pollList})=> {
  
    if(!pollList || pollList?.length === 0) return null;

    return (
        <section id='poll' className={s.section} >
            <SectionWrapper>
            <h3 className={s.main_title}>{title}</h3>
             <Accordion>
            {pollList?.map((item)=> {
                const header = item?.find((el) => el?.type === 'poll');
                return (
                <AccordionItem key={v4()} header={header?.title ? header?.title : item[0].title}>
                <DocumentsList documents_list={item}/>
              </AccordionItem>
            )})}
        </Accordion>

            </SectionWrapper>
        </section>
    )
};


export default PollListSection;


