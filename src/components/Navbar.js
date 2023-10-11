import React, {useState, useEffect} from 'react'

// importar estilos globales
import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText,
} from '../styles/Global.styled'

import { GiHamburgerMenu } from 'react-icons/gi'
import theme from '../utils/theme'
import NavMenu from './layouts/NavMenu'

import { NavbarContainer, Logo, MenuIcon} from '../styles/Navbar.styled'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [stick, setStick] = useState(false)



  return (
    <NavbarContainer bgColor="#0f172a">
        <PaddingContainer
            top="1.2rem"
            bottom="1.2rem"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <Container>
                <FlexContainer justify="space-between" responsiveFlex>
                    {/* Logo  */}
                    <Logo>
                        Nico<BlueText>Dev</BlueText> 
                    </Logo>

                    {/* Menu Hamburguesa */}

                    <MenuIcon
                        onClick={() => {setOpenMenu(true)}} 
                    >
                        <GiHamburgerMenu/>
                    </MenuIcon>
                </FlexContainer>
            </Container>

            {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar