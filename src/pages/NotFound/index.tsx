import { useNavigate } from 'react-router-dom'
import s from './NotFound.module.scss'

export default function NotFound(){
    const navigate = useNavigate();

    return (
        <div className={s.notFound}>
            <button className={s.notFound__voltar} onClick={ () => navigate(-1)}>{'< Voltar'}</button>
            <img className={s.notFound__404} src="/assets/img/404/404.png" alt="Página não encontrada" />
        </div>
    )
}