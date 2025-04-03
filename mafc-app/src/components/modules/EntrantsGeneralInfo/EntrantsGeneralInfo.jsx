import s from './entrants_general_info.module.scss';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import NumberedList from '@/components/elements/NumberedList/NumberedList';

const documents= ['документ про попередню освіту з додатком', 'сертифікат НМТ','паспорт або ID-картка – паперовий витяг з Єдиного державного демографічного реєстру','Свідотство про народження','копія реєстраційного номеру облікової картки платника податків','фото 3х4 – 6 штук', 'військово-обліковий документ'];

const services = ['гуртожиток','бібліотека','предметні гуртки','гуртки художньої самодіяльності','спортивні секції',]

const EntrantsGeneralInfo =()=> {
    return (
        <section className={s.section}>
            <SectionWrapper>
                <h3 className={s.title}>Перелік документів для вступу</h3>

                <div className={s.container}>
                   <NumberedList list_to_render={documents}/>


                    <a className={s.link} href={'http://matbnau.in.ua/abit/perelik.pdf'} target="_blank" >
                    Перелік документів, необхідних при прийомі на навчання дітей-сиріт та дітей, позбавлених батьківського піклування
                    </a>

                    <a className={s.link} href={'http://matbnau.in.ua/abit/Specumovi.pdf'} target="_blank" >
                    Спеціальні умови участі в конкурсному відборі для здобуття освітньопрофесійного ступеня фахового молодшого бакалавра
                    </a>

                    <p className={s.text}>
                    Вступники, які мають диплом кваліфікованого робітника, молодшого спеціаліста, бакалавра, мають право вступити на іншу спеціальність (напрям підготовки) за результатами фахової співбесіди.
                    </p>

                    <a className={s.link} href={'http://matbnau.in.ua/abit/example/ml.pdf'} target="_blank" >
                    Рекомендована структура, порядок написання та критерії оцінювання мотиваційного листа
                    </a>
                    <a className={s.link} href={'http://matbnau.in.ua/abit/example/zl.pdf'} target="_blank" >
                    Зразок мотиваційного листа
                    </a>
                        
                </div>

            </SectionWrapper>
        </section>
    )
};


export default EntrantsGeneralInfo;