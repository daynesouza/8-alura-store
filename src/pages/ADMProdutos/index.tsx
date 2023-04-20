import s from './ADMProdutos.module.scss';
import { useNavigate } from 'react-router-dom';
import { listaDeProdutosState, produtoEditado } from 'state/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import classNames from 'classnames';
import { Iproduto } from 'types/produto';

export default function ADMProdutos() {

    const navegate = useNavigate();
    const produtos = useRecoilValue(listaDeProdutosState);
    const setProdutoEditado = useSetRecoilState(produtoEditado);

    const editarProduto = (produto:Iproduto) => {

        setProdutoEditado(produto);
        navegate('/adm/editar');
    }

    return (
        <>
            <section className={s.title__container}>
                <h2 className={s.title}>ADMIN - PRODUTOS</h2>
            </section>
            <section className={s.produtos}>
                <button className={`${s.produtos__buttonAdicionar} ${s.button}`} onClick={() => navegate('/adm/cadastro')}>Adicionar</button>
                {produtos.map(produto => (
                    <div className={s.produto} key={produto.id}>
                        <img className={s.produto__imagem} src={produto.photo} alt={produto.name} />
                        <h2 className={s.produto__title}>{produto.name}</h2>
                        <button
                            onClick={() => editarProduto(produto)}
                            className={classNames({
                                [s.button]: true,
                                [s['produto__button--editar']]: true
                            })}>Editar</button>                            
                        <button className={classNames({
                            [s.button]: true,
                            [s['produto__button--excluir']]: true
                        })}>Excluir</button>
                    </div>
                ))}
            </section>
        </>
    )
}
