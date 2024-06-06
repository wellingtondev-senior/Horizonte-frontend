

interface NavBarProps {
    open: boolean
}

const Navbar = ({ open }: NavBarProps) => {


    return (<></>
        // <Menu.Root open={open}>
        //     <Menu.Header open={open} className="w-full h-auto flex items-center justify-center">
        //         <Menu.Action icon={HiOutlineMenuAlt3} />
        //     </Menu.Header>
        //     <Menu.Item icon={TiHome} href="/colaborador" title="Pagina Inicial"/>
        //     <Menu.Item icon={FaListUl} href="/colaborador/cadastros" title="Cadastro"/>
        //     <Menu.Item icon={FaUser} href="/colaborador/perfil" title="Perfil"/>
        //     <Menu.Item icon={IoSettingsOutline} href="/colaborador/analises" title="Analises"/>
        //     <Menu.Item icon={FaUsers} href="/colaborador/equipe" title="Equipe"/>
        //     <Menu.Item icon={FaSearch} href="/colaborador/procurar" title="Procurar"/>
        //     <Menu.Item icon={MdOutlineLogout} href="/colaborador/sair" title="Sair"/>
        // </Menu.Root>
    );
}

export default Navbar;