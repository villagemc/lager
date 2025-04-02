import { ContactStruct } from "./types"
import { FiPhone } from "react-icons/fi"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

export const CONTACTS: ContactStruct[] = [
  {
    id: 1,
    name: 'WhatSapp',
    href: 'https://wa.me/77086377088',
    icon: FaWhatsapp
  },
  {
    id: 2,
    name: 'Instagram',
    href: 'https://www.instagram.com/zvezdnyy_burabai/',
    icon: FaInstagram
  },
  {
    id: 3,
    name: 'MODAL_BTN_PHOME',
    href: 'tel:+77086377088',
    icon: FiPhone,
    trans: true
  },
]