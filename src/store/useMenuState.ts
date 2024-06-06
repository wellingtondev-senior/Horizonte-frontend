import { create } from 'zustand';


export interface useMenuStateProps {
    visible: boolean,
    setVisible: () => void
}
const useMenuState = create<useMenuStateProps>((set) => ({
    visible: true,
    setVisible: () => set((state) => (
            { 
                visible: !state.visible,
            }
        )
        )
    

})
);

export default useMenuState;
