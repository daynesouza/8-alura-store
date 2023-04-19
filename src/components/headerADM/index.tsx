import classNames from 'classnames';
import style from './Header.module.scss';
import logo from 'assets/logo.svg';
import { CgSearch } from 'react-icons/cg';
import { BsCartDash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { countCarrinho } from 'state/seletores/useListaCarrinho';
import { useRecoilValue } from 'recoil';

export default function HeaderADM() {
    const numeroDeItensCarrinho = useRecoilValue(countCarrinho);
    
    return (
        <header className={`${style.header} container`}>
            <nav className={`${style.header__cabecalho} container`}>
                <ul className={`${style.cabecalho__menu} container`}>
                    <li className={style.cabecalho__links}>
                        <Link to='/'>
                            <img className={style.header__cabecalho__container__tittle} src={logo} alt="logo alura store" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
