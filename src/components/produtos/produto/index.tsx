import style from './Produto.module.scss';
import classNames from 'classnames';
import useAdicionarCarrinho from 'common/AdicionarProduto';
import Button from 'common/button';
import { Iproduto } from 'types/produto';
import { useNavigate } from 'react-router-dom';

export default function Produto( props: Iproduto){
    const { name, photo, price, id, category } = props;
    const quantidade = 1;
    const produtoCarrinho = {name, photo, price, id, quantidade}
    const navigate = useNavigate();
    const adicionarProdutoNoCarrinho = useAdicionarCarrinho();

    return (
        <div className={style.produto}>

            <img className={style.produto__imagem} src={photo} alt={name} onClick={ () => navigate(`/DetalheProduto/${id}`) }/>

            <div className={ classNames({
                [style.produto__container__text]:true,
                [style[`produto__text__container--${category.label.toLocaleLowerCase()}`]]:true

            })}>
                <h3 className={ style.produto__text}>{name}</h3>
                <h3 className={ style.produto__text}>{`R$ ${price.toFixed(2)}`}</h3>
            </div>
            <Button 
                key= {id}
                name="Comprar"
                onClick={ () => adicionarProdutoNoCarrinho(produtoCarrinho) }
            />
        </div>
    )
}
