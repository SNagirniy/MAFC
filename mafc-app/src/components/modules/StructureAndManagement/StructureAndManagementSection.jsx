import SectionWrapper from '@/components/layouts/SectionWrapper';
import s from './structure_and_management.module.scss';
import TeacherCard from '@/components/elements/teacherCard/TeacherCard';


const teachers = [
    {
        id:6,
        name: 'Пахович Наталія Марцинівна',
        viewImageSrc: '/Pahovich.png',
        position: 'Директор коледжу, спеціаліст вищої категорії, викладач-методист',
        mail: 'nmpakhovich@ukr.net',
        phone: '0(4574)-3-33-21'
    },
{
    id:4,
    name: 'колІсник Олеся іваніВна',
    viewImageSrc: '/Kolisnyk.png',
    position: 'Заступник директора з навчальної роботи, спеціаліст вищої категорії, викладач-методист',
    mail: 'olessiakolpal@gmail.com',
    phone: '0(4574)-3-33-34'
},
{
    id:5,
    name: 'Почтар Наталія Іванівна',
    viewImageSrc: '/Poshtar.png',
    position: 'Заступник директора з виховної роботи, спеціаліст вищої категорії, викладач-методист',
    mail: 'Pochtarnatali@gmail.com',
    phone: ''
}];


const StructureAndManagementSection = ()=> {


    return(
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.main_title}>адміністрація коледжу</h3>
            <ul className={s.list}>

                {teachers?.map((teacher)=> {
                    return(
                        <li key={teacher?.id} className={s.item}>
                            <TeacherCard 
                            name={teacher?.name}
                            viewImageSrc={teacher?.viewImageSrc}
                            position={teacher?.position}
                            mail={teacher?.mail}
                            phone={teacher?.phone}
                            description={teacher?.description}
                            consultation={teacher?.consultation}/>
                        </li>
                    )
                })}
                
            </ul>
            </SectionWrapper>
        </section>
    )
};


export default StructureAndManagementSection;

