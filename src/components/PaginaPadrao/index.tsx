import Footer from 'components/footer';
import Header from 'components/header';
import s from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
