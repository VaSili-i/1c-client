'use client';

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  type BoxProps,
  type FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { type IconType } from 'react-icons';
import { memo } from 'react';
import { sidebarNavList } from 'app/provider/nav/config/sidebarNavList';
import { AppLink } from 'shared/ui/Link/AppLink';
import cls from './Sidebar.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  path: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('bg-color', 'bg-color')}
      w={{ base: 'full', md: 'fit-content' }} // Используем 'fit-content' для подгонки по иконкам
      pos="fixed"
      h="full"
      {...rest}>
      {/* Верхняя часть боковой панели с логотипом и кнопкой закрытия */}
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text color={useColorModeValue('main-color', 'main-color')} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton
          color={useColorModeValue('main-color', 'main-color')}
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        />
      </Flex>

      {/* Список элементов навигации, передаем только иконки и текст */}
      {sidebarNavList.map((link) => (
        <NavItem key={link.title} Icon={link.Icon} name={link.title} path={link.to} />
      ))}
    </Box>
  );
};
const getIconClassNames = (to: string): string => joinClassName(cls.icon, { [cls.active]: to === location.pathname });
const NavItem = ({ Icon, children, path, name, ...rest }: NavItemProps) => {
  return (
    <AppLink to={path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={useColorModeValue('main-color', 'reverse-secondary-color')}
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}>
        {<Icon className={getIconClassNames(path)} />}

        <Text display={{ base: 'flex', md: 'none' }} fontSize="sm">
          {name}
        </Text>
      </Flex>
    </AppLink>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      {/* Кнопка для открытия боковой панели */}
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        color={useColorModeValue('main-color', 'main-color)')}
        aria-label="open menu"
        _focus={{ outline: 'none' }} // Убирает фокусное кольцо
        _active={{ bg: 'none' }} // Отключает фоновый цвет при нажатии
        icon={<FiMenu />}
      />

      {/* Логотип на мобильной панели */}
      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="main-color">
        Logo
      </Text>

      {/* Панель с иконками и аватаром */}
      <HStack bg={useColorModeValue('up-bg-color', 'up-bg-color)')} spacing={{ base: '0', md: '6' }}>
        {/* Иконка уведомлений */}
        <IconButton
          size="lg"
          variant="ghost"
          _focus={{ outline: 'none' }} // Убирает фокусное кольцо
          _active={{ bg: 'none' }} // Отключает фоновый цвет при нажатии
          aria-label="open menu"
          color={useColorModeValue('main-color', 'main-color)')}
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                {/* Аватар пользователя */}
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  color={useColorModeValue('main-color', 'main-color)')}
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs">Admin</Text>
                </VStack>
                {/* Иконка стрелки вниз для меню */}
                <Box color={useColorModeValue('main-color', 'main-color)')} display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            {/* Содержимое меню */}
            <MenuList color={useColorModeValue('main-color', 'main-color)')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('up-bg-color', 'up-bg-color)')}>
      {/* Боковая панель, которая отображается на больших экранах */}
      <SidebarContent
        bg={useColorModeValue('up-bg-color', 'up-bg-color')}
        maxW="100px"
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        width="90px"
      />
      {/* Модальное окно для боковой панели на мобильных устройствах */}
      <Drawer
        bg={useColorModeValue('up-bg-color', 'up-bg-color)')}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}

        size="full">
        <DrawerContent bg={useColorModeValue('up-bg-color', 'up-bg-color)')}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Верхняя навигационная панель для мобильных устройств */}
      <MobileNav bg={useColorModeValue('up-bg-color', 'up-bg-color)')} onOpen={onOpen} />
      {/* Основной контент страницы */}
    </Box>
  );
};

export default memo(SidebarWithHeader);
