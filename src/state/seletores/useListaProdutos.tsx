import { selector, useRecoilValue } from "recoil";
import { Iproduto } from "types/produto";
import produtos from '../../../db.json';
import { listaDeComprasState } from 'state/atom';

export const produtosAsync = selector({
    key: 'produtosAsyn',
    get: () => {
        return produtos;
    }
    /* get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/produtos')
        const produtosJson: Iproduto[] = await respostaHttp.json()
        return produtosJson
    } */
})



