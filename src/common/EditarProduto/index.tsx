import http from 'http';
import { useRecoilState } from 'recoil';
import { listaDeProdutosState } from 'state/atom';
import { Iproduto } from 'types/produto';

export default function useEditarProduto(){
    const [produtos, setProdutos] = useRecoilState(listaDeProdutosState);
    
    function atualizaProdutoLista(produto : Iproduto) {
        const novaListaProdutos = produtos.map( item => item.id === produto.id ? produto : item)
        setProdutos(novaListaProdutos);
        atualizaProdutoServidor(produto);
    }

    function atualizaProdutoServidor(produto : Iproduto){
        http.put(`produto/${produto.id}`, {
            name: produto.name,
            photo: produto.photo,
            price: produto.price,
            id: produto.id,
            category: produto.category
        })
        .catch(erro => console.log(erro))
    }

    return atualizaProdutoLista
}
