import Banner from 'components/banner';
import s from './Home.module.scss';
import Filtro from 'components/filtro/indext';
import Produtos from 'components/produtos';
import { useSetRecoilState } from 'recoil';
import { listaDeProdutosState } from 'state/atom';
import http from 'http';
import { Iproduto } from 'types/produto';
import { useEffect } from 'react';

export default function Home() {

    return (
        <>
            <Banner banner={'/assets/img/home/banner.jpg'} />
            <Filtro titulo='Todos os produtos' />
            <Produtos filtro='' />
        </>
    );
}