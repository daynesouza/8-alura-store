import FormADM from 'components/ADMForm'
import s from './ADMCadastro.module.scss'

export default function ADMCadastro(){
    return(
        <div className={s.cadastro}>
            <FormADM 
                title='Adicionar novo Produto'
                button='Adicionar'
            />
        </div>
    )
}
