"use client"

import React, { useState } from 'react';
import Logo from './Logo'
import Meeting from './Meeting';
import Updates from './Updates';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Popover, PopoverTrigger, PopoverContent, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

export default function Header() {


  return (
      <Navbar isBordered className="bg-transparent">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-1 flex object-fill" justify="center">
          <NavbarBrand>
            <Link href='/'>
            <Logo/>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
          <Link  href="/">
          <Logo/>
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Meeting />
          </NavbarItem>
          <NavbarItem>
            <Button variant="light" size="sm" className="font-sans text-md">
              <Link color="foreground" href="https://drive.google.com/drive/folders/1ApGqFGzzXVFPvYICfUenm4Y3z3OQmYT6?usp=drive_link" target='_blank'>
                Union Document
              </Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Updates />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu >
          <NavbarMenuItem key="Meeting" >
            <Meeting />
          </NavbarMenuItem>
          <NavbarMenuItem key="Udocs" >
            <Button variant="light">
              <Link color="foreground" href="https://drive.google.com/drive/folders/1ApGqFGzzXVFPvYICfUenm4Y3z3OQmYT6?usp=drive_link" target='_blank'>
                Union Document
              </Link>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem key="Updates" >
            <Updates />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

  );
}
