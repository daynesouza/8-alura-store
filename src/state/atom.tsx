import { atom } from "recoil";
import { Iproduto } from "types/produto";
import { Icarrinho } from "types/carrinho";
//import { produtosAsync } from "./seletores/useListaProdutos";
import { produtos } from '../../db.json';

export const listaDeProdutosState = atom<Iproduto[]>({
    key: 'listaDeProdutosState',
    //default: produtosAsync
    default: produtos
})

export const listaDeComprasState = atom<Icarrinho[]>({
    key: 'listaDeComprasState',
    default: []
})

export const saldoTotalState = atom<number>({
    key: 'saldoTotalState',
    default: 0
})
