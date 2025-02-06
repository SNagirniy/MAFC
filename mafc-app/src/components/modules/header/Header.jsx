import s from './header.module.scss';
import Logo from '@/components/elements/logo/Logo';
import Navigation from '@/components/elements/navigation/Navigation';
import Language from '@/components/elements/language/Language';


const Header =()=> {
    return (
        <header className={s.header}>
            <Logo/>
            <Navigation/>
        </header>
    )
};

export default Header;