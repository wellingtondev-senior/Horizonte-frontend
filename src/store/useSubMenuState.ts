import { create } from 'zustand';


export interface useSubMenutateProps {
    visible: boolean,
    setVisible: () =>void,
}
const useSubMenutate = create<useSubMenutateProps>((set) => ({
    visible: false,
    items:"",
    setVisible: () => set((state:{visible:boolean}) => ({visible: !state.visible})
    ),
    

})
);

export default useSubMenutate;
