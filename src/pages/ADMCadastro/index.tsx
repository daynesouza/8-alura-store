import FormADM from 'components/ADMForm'
import s from './ADMCadastro.module.scss'

export default function ADMCadastro(){
    return(
        <div className={s.cadastro}>
            <FormADM
                tipo='cadastrar'
                title='Adicionar novo Produto'
                button='Adicionar'
                produto = {null}
            />
        </div>
    )
}
