
import s from './partner_header.module.scss';

const PartnerHeader = ({logo, title})=> {


     return <div className={s.box}>
              { logo && <div className={s.thumb}>
                    <img className={s.image}  src={`/api/about/images_proxy?id=${logo.id}`}  alt="company logo" />
                </div> }
                <p className={s.title}>{title}</p>
             </div>
};

export default PartnerHeader;