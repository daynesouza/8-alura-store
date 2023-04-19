import Footer from 'components/footer';
import Header from 'components/header';
import s from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom';
import HeaderADM from 'components/headerADM';

export default function PaginaPadraoADM() {
    return (
        <>
            <HeaderADM />
            <main className={s.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
