'use client'
import s from './contact_form.module.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import SectionLoader from '../SectionLoader/SectionLoader';
import { useTransition } from 'react';


const ContactForm = ()=> {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const[isPending, startTransition] = useTransition();


    const handleChange = (e)=> {
        const {name, value} = e?.currentTarget;
        if(name === 'name') {setUserName(value.trim())} 
        else if(name === 'email') {setUserEmail(value)} 
        else if(name === 'message'){
            setMessage(value)
        }
    };
   

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const userData = {
            name: userName,
            email: userEmail,
            message: message
        };

        startTransition(async()=> { 
            try {
                const res = await fetch('/api/contacts', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json', },
                    body: JSON.stringify(userData), });
    
                const result = await res.json();
                if(result?.ok){toast.success("Ваше повідомлення отримано. Очікуйте на відповідь.")}
            } catch (error) {
            toast.error('Щось пішло не так... Ми вже працюємо над вирішенням проблеми.')
            } finally{resetFields()}})
        };

    const resetFields = ()=>{
        setMessage(''),
        setUserEmail(''),
        setUserName('')
    };


    


    return(
        <div className={s.form_container}>
           {isPending && <div className={s.overlay}>
                <SectionLoader/>
            </div>} 
            <p>Маєте запитання або пропозиції?</p>
            <h3>Напишіть нам!</h3>
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>Ім'я
                                <input 
                                onChange={handleChange} 
                                minLength={2} 
                                className={s.input} 
                                value={userName} 
                                name='name' 
                                type="text" 
                                autoComplete='false' 
                                required />
                            </label>
                            <label className={s.label}>Email
                                <input 
                                onChange={handleChange} 
                                minLength={2} 
                                className={s.input} 
                                value={userEmail} 
                                name='email' 
                                type='email' 
                                autoComplete='false' 
                                required />
                            </label>
           
            <div className={s.msg_box}>
                            <label className={s.label} htmlFor="message">Повідомлення</label>
                            <textarea
                                value={message}
                                onChange={handleChange}
                                minLength={10}
                                name='message'
                                id="message"
                                type="text"
                                required
                                placeholder='Пишіть тут...' />
                        </div>

                        <button className={s.form_btn} type='submit'>Відправити</button>
            
        </form>
        </div>
    )
};

export default ContactForm;