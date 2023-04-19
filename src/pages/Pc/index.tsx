import Banner from "components/banner";
import Filtro from "components/filtro/indext";
import Produtos from "components/produtos";

export default function Pc() {
    return (
        <>
            <Banner banner={'/assets/img/pc/banner.png'} />
            <Filtro titulo="PC"/>
            <Produtos filtro='pc'/>
        </>
    );
}