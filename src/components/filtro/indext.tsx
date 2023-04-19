import s from './Filtro.module.scss';

export default function Filtro( {titulo} : {titulo:string} ){
    return (
        <div className={s.filtro}>
            <h1 className={s.filtro__titulo}>{titulo}</h1>
            <select name="select" className={s.filtro__select}>
                <option value="padrao">Padrão</option>
                <option value="value">Valor</option>
                <option value="name">Nome</option>
            </select>
        </div>        
    )
}
