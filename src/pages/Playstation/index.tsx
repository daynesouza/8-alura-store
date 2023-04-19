import Banner from "components/banner";
import Filtro from "components/filtro/indext";
import Produtos from "components/produtos";

export default function Playstation(){
    return (
        <>
            <Banner banner={'/assets/img/playstation/banner.jpg'} />
            <Filtro titulo="Playstation"/>
            <Produtos filtro='playstation'/>
        </>
    );
}