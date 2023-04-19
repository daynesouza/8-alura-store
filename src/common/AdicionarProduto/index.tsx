import { useRecoilState } from 'recoil';
import { listaDeComprasState, saldoTotalState } from 'state/atom';
import { Icarrinho } from 'types/carrinho';



export default function useAdicionarCarrinho() {
    const [carrinho, setCarrinho] = useRecoilState(listaDeComprasState);
    const [saldo, setSaldo] = useRecoilState(saldoTotalState);

    function atualizaCarrinho(produtoCarrinho: Icarrinho) {
        if (verificaCarrinhoVazio()) {
            setCarrinho([produtoCarrinho])
            setSaldo(saldo + produtoCarrinho.price)
        } else {
            atualizaQuantidadeItem(produtoCarrinho);
        }
    }

    function atualizaQuantidadeItem(produtoCarrinho: Icarrinho) {
        let carrinhoAtual: Icarrinho[];
        let quantidadeAtualizada: number;

        if (carrinho.find( item => item.id === produtoCarrinho.id)){
            carrinhoAtual = carrinho?.map((item) => {
                if (produtoCarrinho.id === item.id) {
                    quantidadeAtualizada = item.quantidade + 1;
                    return(
                    { 
                        name: produtoCarrinho.name,
                        photo: produtoCarrinho.photo,
                        price: produtoCarrinho.price,
                        id: produtoCarrinho.id,
                        quantidade: quantidadeAtualizada
                    })
                }else{
                    return (item)
                }
            })
        }else{
            carrinhoAtual = [...carrinho, produtoCarrinho];
        }

        setCarrinho([...carrinhoAtual]);      
    }

    function verificaCarrinhoVazio() {
        if (carrinho.length === 0) {
            return true
        }
    }

    return atualizaCarrinho
}

