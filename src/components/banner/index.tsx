import s from './Banner.module.scss';

export default function Banner({ banner } : { banner : string}){
    return(
        <img className={s.imagem} src={banner} alt='Banner' />
    )
}