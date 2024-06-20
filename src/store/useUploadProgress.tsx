import { PageState } from '@/enums/page.enum';
import { create } from 'zustand';


export interface UseUploadProgressStoreProps {
    progress: number,
    setProgress: (progress:number) => void,
}
const useUploadProgressStore = create<UseUploadProgressStoreProps>((set) => ({
    progress: 0,
    setProgress: (progress: number) => {
        return set(() => ({ progress }))
    }



})
);

export default useUploadProgressStore;
