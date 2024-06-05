import { PageState } from '@/enums/page.enum';
import { create } from 'zustand';


export interface usePageStoreProps {
    page: number,
    setPage: (page: PageState, index: number) => void,
}
const usePageStore = create<usePageStoreProps>((set) => ({
    page: 0,
    setPage: (pageProps: PageState, index: number) => {
        switch (pageProps) {
            case PageState.AUTH:
                return set(() => ({ page: index }))
            case PageState.LEMBRARSENHA:
                return set(() => ({ page: index }))
            case PageState.REGISTRO:
                return set(() => ({ page: index }))
        }
    }



})
);

export default usePageStore;
