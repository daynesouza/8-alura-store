import FormADM from 'components/ADMForm'
import s from './ADMEditar.module.scss'
import { useRecoilValue } from 'recoil'
import { produtoEditado } from 'state/atom'

export default function ADMEditar(){

    const produto = useRecoilValue(produtoEditado);

    return (
        <div className={s.editar}>
            <FormADM
                tipo='editar'
                title='Editar produto'
                button='Editar'
                produto={produto}
            />
        </div>
    )
}