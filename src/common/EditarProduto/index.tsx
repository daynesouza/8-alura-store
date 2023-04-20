import { useRecoilState } from 'recoil';
import { listaDeProdutosState } from 'state/atom';
import { Iproduto } from 'types/produto';

export default function EditarProduto(produto : Iproduto){
    const [produtos, setProdutos] = useRecoilState(listaDeProdutosState);

    const novaListaProdutos = produtos.map( item => item.id === produto.id ? produto : item)

    setProdutos(novaListaProdutos);

    alert('Produto editado com sucesso!')
}