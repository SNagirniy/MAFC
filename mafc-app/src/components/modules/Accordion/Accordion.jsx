'use client'
import { Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import styles from './accordion.module.scss';
import ChevronDown from '../../../../public/chevron_down.svg';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import DocumentsList from "@/components/elements/DocumentsList/DocumentsList";
import { v4 } from "uuid";


const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <ChevronDown className={styles.chevron}/>
          
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

const AccordionComponent = ({title,data})=> {
    return (
        <section className={styles.section}>
            <SectionWrapper>
               {title && <h3 className={styles.main_title}>{title}</h3>}
        <Accordion>
            {data?.map((item)=> {return (
                <AccordionItem key={v4()} header={item?.header}>
                <DocumentsList documents_list={item?.content}/>
              </AccordionItem>
            )})}
        </Accordion>
        </SectionWrapper>
        </section>
      );

}

export default AccordionComponent;