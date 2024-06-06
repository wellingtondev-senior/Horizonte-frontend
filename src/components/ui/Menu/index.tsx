import { MenuAction } from "./MenuAction";
import { MenuButtonTooltip } from "./MenuButtonTooltip";
import { MenuRoot } from "./MenuRoot";
import { MenuSubitems } from "./MenuSubitems";
import { MenuSubitemsRoot } from "./MenuSubitemsRoot";
import { MenuSubitemsTitulo } from "./MenuSubitemsTitulo";



export const Menu = {
  Root:MenuRoot, 
  Action:MenuAction,
  ButtonTooltip:MenuButtonTooltip,
  SubitemsRoot:MenuSubitemsRoot,
  SubitemsTitulo:MenuSubitemsTitulo,
  Subitems:MenuSubitems
}


// const router = useRouter()
// const menuState = useMenuState((state: useMenuStateProps) => state);
// const subMenuState = useSubMenutate((state: useSubMenutateProps) => state);

// return (
//     <article className={menuState.visible ? animateMenu.open : animateMenu.close}>
//             <button onClick={() =>{
//                  menuState.setVisible()
//                  if(subMenuState.visible){
//                     subMenuState.setVisible();
//                  }
//             }} className="h-[50px] w-[50px] flex items-center justify-center text-[20px] text-[#ffffff]  bg-transparent  p-2 mb-10"><HiMenuAlt1 /></button>
//         <nav className="h-full w-full flex flex-col items-center justify-start space-y-4">
//             <ButtonDropMenu onClick={() => router.push("/inicio")} label="Dashboard" icon={<MdSpaceDashboard />} />
//             <ButtonDropMenu onClick={() => subMenuState.setVisible(subMenuData.agenda, 1)} label="Agenda" icon={<TfiAgenda />} />
//             <ButtonDropMenu onClick={() => subMenuState.setVisible(subMenuData.os, 2)} label="Ordens de Serviços" icon={<SiServerless />} />
//             <ButtonDropMenu onClick={() => subMenuState.setVisible(subMenuData.docs, 3)} label="Documentos" icon={<IoDocumentTextOutline />} />
//             <ButtonDropMenu onClick={() => subMenuState.setVisible(subMenuData.cadastros, 4)} label="Cadastros" icon={<IoMdAddCircleOutline />} />
//         </nav>
       
//     </article>