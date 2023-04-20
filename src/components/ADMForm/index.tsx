import { Iproduto } from 'types/produto';
import s from './ADMForm.module.scss';
import { useState } from "react";

interface props {
    title: string,
    button: string
    produto: Iproduto | undefined
}

export default function FormADM(props: props) {

    const { title, button, produto } = props;
    const produtoCategoria = produto?.category.label;[]
    const [valorSelect, setValorSelect] = useState('default');

    const handleChange = (categoria:string) => {
        setValorSelect(categoria);
    }

    return (
        <form action="" className={s.form}>
            <h2 className={s.form__title}>{title}</h2>

            <label className={s.form__label} htmlFor='form__input__nome' >Nome</label>
            <input className={s.form__input} id='form__input__nome' type='text' placeholder='Nome' value={produto?.name} required />

            <label className={s.form__label} htmlFor='form__input__preco'>Preço</label>
            <input className={s.form__input} id='form__input__preco' type='text' placeholder='00,00' value={produto?.price} required />

            <label className={s.form__label} htmlFor='form__input__imagem'>Imagem</label>
            <input className={s.form__input} id='form__input__imagem' type='text' placeholder='Imagem' value={produto?.photo}required />

            <label className={s.form__label} htmlFor='form__input__departamento'>Departamento</label>
            <select
                className={s.form__select__departamento}
                name="form__select__departamento"
                id="form__select__departamento"
                value={produtoCategoria ? produtoCategoria : valorSelect}
                onChange={event => handleChange(event.target.value)}
            >
                <option value="default" disabled> Escolha uma opção </option>
                <option value="xbox" > XBOX </option>
                <option value="pc"> PC </option>
                <option value="playstation" > Playstation </option>
            </select>
            <button className={s.button__adicionar}>{button}</button>
        </form>
    )
}
