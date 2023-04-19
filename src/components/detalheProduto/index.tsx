import { useRecoilValue } from 'recoil';
import s from './DetalheProduto.module.scss';
import { listaDeProdutosState } from 'state/atom';
import { useParams } from 'react-router-dom';
import Button from 'common/button';
import NotFound from 'pages/NotFound';

export default function DetalheProduto() {
    const { id } = useParams();
    const produtos = useRecoilValue(listaDeProdutosState);
    const produto = produtos.find(item => item.id === Number(id));  

    if (!produto) {
        return (<NotFound/>);
    } else {
        return (
            <div className={s.produto}>
                <div className={s.produto__imagem__container}>
                    <img className={s.produto__imagemProduto} src={produto.photo} alt={produto.name} />
                </div>
                <div className={s.produto__descricao}>
                    <p className={`${s.produto__descricao__text} ${s['produto__descricao__text--titulo']}`}>{produto.name}</p>
                    <p className={s.produto__descricao__text}>Plataforma: {(produto.category.label).toUpperCase()}</p>
                    <p className={s.produto__descricao__text}>R$ {produto.price.toFixed(2)}</p>
                    <Button name='Comprar' onClick={ () =>  {} }/>
                </div>
            </div>
        );
    }
}