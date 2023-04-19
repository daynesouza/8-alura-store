import s from './ADMForm.module.scss';

export default function FormADM(){
    return (
        <form action="" className={s.form}>
            <label className={s.form__label} htmlFor='form__input__nome'>Nome</label>
            <input className={s.form__input} id='form__input__nome' type='text' placeholder='Nome' required/>

            <label className={s.form__label} htmlFor='form__input__preco'>Preço</label>
            <input className={s.form__input} id='form__input__preco' type='text' placeholder='00,00' required/>

            <label className={s.form__label} htmlFor='form__input__imagem'>Imagem</label>
            <input className={s.form__input} id='form__input__imagem' type='text' placeholder='Imagem' required/>

            <label className={s.form__label} htmlFor='form__input__departamento'>Departamento</label>
            <select name="form__select__departamento" id="form__select__departamento">
                <option value="Xbox"> XBOX </option>
                <option value="Xbox"> PC </option>
                <option value="Xbox"> Playstation </option>
            </select>
        </form>
    )
}