import s from './ADMProdutos.module.scss';

export default function ADMProdutos(){
    return (
        <>
            <section className={s.title__container}>
                <h2 className={s.title}>ADMIN - PRODUTOS</h2>
            </section>
            <section className={s.produtos}>
                <button className={`${s.produtos__buttonAdicionar} ${s.button}`}>Adicionar</button>
                
            </section>
        </>
    )
}
