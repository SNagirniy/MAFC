'use client'
import s from './back_button.module.scss';

const BackButton = ({custom_class=s.button, title})=> {

const onClick = ()=> {
  window.history.back();
}
    return <button 
            className={custom_class}
            onClick={onClick}
            type='button'>
            {title? title : '<< назад'}
            </button>
};

export default BackButton;