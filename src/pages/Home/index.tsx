import Banner from 'components/banner';
import s from './Home.module.scss';
import Filtro from 'components/filtro/indext';
import Produtos from 'components/produtos';

export default function Home(){

    return(
        <>
            <Banner banner = {'/assets/img/home/banner.jpg'}/>
            <Filtro titulo='Todos os produtos'/>
            <Produtos filtro=''/>
        </>
    );
}