import { Iproduto } from 'types/produto';
import s from './ADMForm.module.scss';
import { useState } from "react";
import useEditarProduto from 'common/EditarProduto';

interface props {
    tipo: string,
    title: string,
    button: string
    produto: Iproduto | null
}

export default function FormADM(props: props) {

    const { tipo, title, button, produto } = props;
    const produtoCategoria = produto?.category
    
    const [name, setName] = useState(produto?.name);
    const [photo, setPhoto] = useState(produto?.photo);
    const [price, setPrice] = useState(produto?.price);
    const [id, setId] = useState(produto?.id);
    const [category, setCategory] = useState('default');

    const atualizarProduto = useEditarProduto();

    const handleChange = (categoria:string) => {
        setCategory(categoria);
    }

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if ( tipo === 'editar'){
            if (name && photo && price && id && category){
                atualizarProduto({name, photo, price, id, category})                
                alert('Produto editado com sucesso!')
            }
        }else {
            console.log('cadastrar')
        }
    }

    return (
        <form action="" className={s.form} onSubmit={submeterForm}>
            <h2 className={s.form__title}>{title}</h2>

            <label className={s.form__label} htmlFor='form__input__nome' >Nome</label>
            <input 
                className={s.form__input} 
                id='form__input__nome' 
                type='text' 
                placeholder='Nome' 
                value={name} 
                required
                onChange= { evento => setName(evento.target.value) }
            />

            <label className={s.form__label} htmlFor='form__input__preco'>Preço</label>
            <input 
                className={s.form__input} 
                id='form__input__preco' 
                type='text' 
                placeholder='00,00' 
                value={price} 
                required 
                onChange= { evento => setPrice(Number(evento.target.value)) }
            />

            <label className={s.form__label} htmlFor='form__input__imagem'>Imagem</label>
            <input 
                className={s.form__input} 
                id='form__input__imagem' 
                type='text' 
                placeholder='Imagem' 
                value={photo} 
                required
                onChange= { evento => setPhoto(evento.target.value) }
            />

            <label className={s.form__label} htmlFor='form__input__departamento'>Departamento</label>
            <select
                className={s.form__select__departamento}
                name="form__select__departamento"
                id="form__select__departamento"
                defaultValue={produtoCategoria ? produtoCategoria : category}
                onChange={event => handleChange(event.target.value)}
                required
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
