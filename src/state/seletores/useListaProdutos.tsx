import http from "http";
import { selector, useSetRecoilState } from "recoil";
import { listaDeProdutosState } from "state/atom";
import { Iproduto } from "types/produto";

export const produtosAsync = selector({

    key: 'produtosAsyn',

    get: async () => {
        const promise = http.get<Iproduto[]>('produtos')
        const dataPromisse = promise.then(response => response.data)

        return dataPromisse
    }
})


