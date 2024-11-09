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
import React, { memo } from 'react';
import { sidebarNavList } from 'app/provider/nav/config/sidebarNavList';
import { AppLink } from 'shared/ui/Link/AppLink';
import cls from './Sidebar.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import type { AppLincType } from 'app/provider/nav/types/types';

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

interface AppLincType extends FlexProps {
  children: React.ReactNode;
  to: string;
  title: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
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
      w={{ base: 'full', md: 'fit-content' }}
      pos="fixed"
      h="full"
      {...rest}>
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

      {sidebarNavList.map((link) => (
        <NavItem key={link.title} Icon={link.Icon} name={link.title} path={link.to} />
      ))}
    </Box>
  );
};

const getIconClassNames = (to: string): string => joinClassName(cls.icon, { [cls.active]: to === location.pathname });

const NavItem = ({ Icon, name, path, ...rest }: AppLincType) => {
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
        <Icon className={getIconClassNames(path)} />
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
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        color={useColorModeValue('main-color', 'main-color')}
        aria-label="open menu"
        _focus={{ outline: 'none' }}
        _active={{ bg: 'none' }}
        icon={<FiMenu />}
      />
      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="main-color">
        Logo
      </Text>
      <HStack bg={useColorModeValue('up-bg-color', 'up-bg-color')} spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          _focus={{ outline: 'none' }}
          _active={{ bg: 'none' }}
          aria-label="open menu"
          color={useColorModeValue('main-color', 'main-color')}
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                />
                <VStack
                  color={useColorModeValue('main-color', 'main-color')}
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs">Admin</Text>
                </VStack>
                <Box color={useColorModeValue('main-color', 'main-color')} display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList color={useColorModeValue('main-color', 'main-color')}>
              <MenuItem>Profile
