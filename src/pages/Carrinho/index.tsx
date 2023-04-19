import ItensCarrinho from 'components/carrinho'
import s from './Carrinho.module.scss'

export default function Carrinho(){
    return (
        <div className={s.carrinho}>
            <ItensCarrinho/>
        </div>
    )
}