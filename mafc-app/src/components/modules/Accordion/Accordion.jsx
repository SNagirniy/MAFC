'use client'
import { Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import styles from './accordion.module.scss';
import ChevronDown from '../../../../public/chevron_down.svg';
import SectionWrapper from "@/components/layouts/SectionWrapper";
import DocumentsList from "@/components/elements/DocumentsList/DocumentsList";
import { v4 } from "uuid";
import RteTextBox from "@/components/elements/rteTextBox/RteTextBox";


const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {<span>{header}</span>}
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

const AccordionComponent = ({title,data, folderId})=> {
if(!data || data?.error || data?.length === 0) return null;


    return (
        <section key={folderId} className={styles.section}>
            <SectionWrapper>
               {title && <h3 className={styles.main_title}>{title}</h3>}
        <Accordion>
            {data?.map((item)=> {return (
                <AccordionItem key={v4()} header={item?.header || item?.topic || item?.folderName}>
                <DocumentsList documents_list={item?.content || item?.documents}/>
                {item?.markdown && <RteTextBox markdown={item?.markdown}/>}
              </AccordionItem>
            )})}
        </Accordion>
        </SectionWrapper>
        </section>
      );

}

export default AccordionComponent;