import { useRecoilValue } from 'recoil';
import style from './Produtos.module.scss';

import { listaDeProdutosState } from 'state/atom';
import Produto from './produto';


export default function Produtos( {filtro} : {filtro:string}){

    const produtos = useRecoilValue(listaDeProdutosState) //Recupera o valor 
    let produtosFiltrados = [];

    if (filtro !== ''){
        produtosFiltrados = produtos.filter( produto => produto.category.label === filtro);
    }else{
        produtosFiltrados = produtos;
    }

    return (
        <div className={style.produtos}>
            {produtosFiltrados.map( (produto, index) => (
                <Produto key={index} {...produto}/>
            ))}
        </div>
    );
}
