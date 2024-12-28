import css from '../../styles/Header.module.scss';
import Link from "next/link";


const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
         {/*       логотип*/}
                <Link href="/" className={css.logo}>
                    <img src="/svg/logon.svg" alt="Neuphoria Logo" />
                </Link>
              {/*  Навигация*/}
                <nav className={css.nav}>
                    <ul>
                        <li><Link href="/about">О игре</Link></li>
                        <li><Link href="/features">Форум</Link></li>
                        <li><Link href="/contact">Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
