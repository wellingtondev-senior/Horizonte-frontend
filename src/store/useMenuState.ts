import { create } from 'zustand';


export interface useMenutateProps {
    visible: boolean,
    setVisible: () =>void,
}
const useMenutate = create<useMenutateProps>((set) => ({
    visible: false,
    items:"",
    setVisible: () => set((state:{visible:boolean}) => ({visible: !state.visible})
    ),
    

})
);

export default useMenutate;
