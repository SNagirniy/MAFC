import s from './contact_form.module.scss';

const ContactForm = ()=> {


    return(
        <form className={s.form}>
            <label className={s.label}>Ім'я
                                <input minLength={2} className={s.input} name='name' type="text" autoComplete='false' required />
                            </label>
                            <label className={s.label}>Email
                                <input minLength={2} className={s.input} name='email' type='email' autoComplete='false' required />
                            </label>
           
            <div className={s.msg_box}>
                            <label className={s.label} htmlFor="message">Повідомлення</label>
                            <textarea
                                name='message'
                                id="message"
                                type="text"
                                required
                                placeholder='Пишіть тут...' />
                        </div>

                        <button className={s.form_btn} type='submit'>Відправити</button>
            
        </form>
    )
};

export default ContactForm;