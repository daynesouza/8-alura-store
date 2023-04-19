import { selector, useRecoilValue } from "recoil";
import { listaDeComprasState } from 'state/atom';

export const countCarrinho = selector({
    key: 'countCarrinho',
    get: ({get}) => {
        const listaDeCompras = get(listaDeComprasState);
        let quantidadeTotal = 0;

        if (listaDeCompras.length !== 0){
            listaDeCompras.map ( produto => {
                quantidadeTotal = produto.quantidade + quantidadeTotal
        })};
        return quantidadeTotal
    }
})
