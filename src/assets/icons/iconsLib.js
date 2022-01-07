import {
  faStore,
  faAngleDown,
  faAngleUp,
  faDollarSign,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faClock,
  faPlus,
  faListUl,
  faUser,
  faPhoneAlt,
  faBoxes,
  faSearchDollar,
  faReceipt,
  faIdBadge,
  faCog,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faTruckLoading,
  faMoneyBillWave,
  faBan,
  faEdit,
  faTimes,
  faLock,
  faLockOpen,
  faFileAlt,
  faTrash,
  faCalendarAlt,
  faEllipsisH,
  faEllipsisV,
  faCalendarCheck,
  faMinus,
  faFileSignature,
  faStopwatch,
  faHome
} from '@fortawesome/free-solid-svg-icons'


export const menuIcons = {
  HOUSE: faHome,
}

export const generalIcons = {
  MANAGER: faIdBadge,
  ADDRESS: faMapMarkerAlt,
  DELIVERY_FEE: faHandHoldingUsd,
  DELIVERY_TYPE: faTruckLoading,
  PAYMENT_TYPE: faMoneyBillWave,

  ARROW_DOWN: faAngleDown,
  ARROW_UP: faAngleUp,
  CLOCK: faClock,
  ARROW_RIGHT: faArrowRight,
  ARROW_LEFT: faArrowLeft,
  CHECKMARK: faCheck,
  USER: faUser,
  PHONE: faPhoneAlt,

  CLOSE: faTimes,

  PRICE: faDollarSign,

  OPENED: faLockOpen,
  CLOSED: faLock,

  ADD: faPlus,
  REMOVE: faMinus,

  DESCRIPTION: faFileAlt,
  TRASH: faTrash,
  CALENDAR: faCalendarAlt,
  CALENDAR_CHECK: faCalendarCheck,

  HORIZONTAL_DOTS: faEllipsisH,
  VERTICAL_DOTS: faEllipsisV,

  CONDITIONS: faFileSignature,

  COUNTER: faStopwatch,
}

export const entityMenuIcons = {
  edit: faEdit,
}

export const groupedIcons = {
  ...menuIcons,
  ...generalIcons,
  ...entityMenuIcons,
}


export const getIcon = (iconName) => groupedIcons[iconName] || faBan

// -----
// -----
// TOOLTIPS:

export const tooltips = {
  'credit-card': 'Cartão de crédito',
  'dollar-sign': 'Dinheiro',
  times: 'Fechar',

  edit: 'Editar',

  truck: 'Delivery',
  hands: 'Retirada',
  store: 'Consumo no local',
  trash: 'Deletar',

  utensils: 'Comida',
  'glass-whiskey': 'Bebida',
  'wine-glass-alt': 'Bebida Alcoolica',
  'ellipsis-v': 'Opções',
  'ellipsis-h': 'Opções',

  'money-bill': 'Valor',
  'money-bill-wave': 'Price',

  'calendar-minus': 'Data',
  'stopwatch-20': 'Usos',
  'tachometer-alt': 'Distância',
}
