import Banner from "components/banner";
import Filtro from "components/filtro/indext";
import Produtos from "components/produtos";

export default function Xbox(){
    return (
        <>
            <Banner banner={'/assets/img/xbox/banner.jpg'} />
            <Filtro titulo='Xbox'/>
            <Produtos filtro='xbox'/>
        </>
    );
}