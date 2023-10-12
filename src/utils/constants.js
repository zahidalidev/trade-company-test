import { Menu } from 'antd'

export const filterCount = 7

export const companiesLogos = [
  '/icons/companyLogo2.svg',
  '/icons/companyLogo3.svg',
  '/icons/companyLogo4.svg',
  '/icons/companyLogo5.svg',
  '/icons/companyLogo6.svg',
  '/icons/companyLogo7.svg',
  '/icons/companyLogo8.svg',
]

export const contactsLogos = [
  '/icons/people1.svg',
  '/icons/people2.svg',
  '/icons/people3.svg',
  '/icons/people4.svg',
  '/icons/people5.svg',
  '/icons/people6.svg',
  '/icons/people7.svg',
]

export const menu = (
  <Menu>
    <Menu.Item key='profile'>Profile</Menu.Item>
    <Menu.Item key='logout'>Logout</Menu.Item>
  </Menu>
)

export const filterOptions = [
  {
    name: 'userType',
    options: [
      { value: 'host', label: 'Host' },
      { value: 'company', label: 'Company' },
      { value: 'guest', label: 'Guest' },
    ],
    placeHolder: 'User Type',
    selectedValues: [],
  },
  {
    name: 'selling',
    options: [{ value: 'selling', label: 'Selling' }],
    placeHolder: 'What they selling',
    selectedValues: [],
  },
  {
    name: 'buying',
    options: [{ value: 'buying', label: 'Buying' }],
    placeHolder: 'What they buying',
    selectedValues: [],
  },
  {
    name: 'availability',
    options: [{ value: 'availability', label: 'Availability' }],
    placeHolder: 'Meeting availability',
    selectedValues: [],
  },
  {
    name: 'territory',
    options: [{ value: 'territory', label: 'Territory' }],
    placeHolder: 'Target territory',
    selectedValues: [],
  },
  {
    name: 'country',
    options: [{ value: 'country', label: 'Country' }],
    placeHolder: 'Country',
    selectedValues: [],
  },
  {
    name: 'city',
    options: [{ value: 'city', label: 'City' }],
    placeHolder: 'City',
    selectedValues: [],
  },
  {
    name: 'keywords',
    options: [{ value: 'keywords', label: 'Keywords' }],
    placeHolder: 'Keywords',
    selectedValues: [],
  },
  {
    name: 'companyType',
    options: [{ value: 'companyType', label: 'Company Type' }],
    placeHolder: 'Company type',
    selectedValues: [],
  },
  {
    name: 'companySize',
    options: [{ value: 'companySize', label: 'Company Size' }],
    placeHolder: 'Company size',
    selectedValues: [],
  },
  {
    name: 'meetingLocation',
    options: [{ value: 'meetingLocation', label: 'Meeting Location' }],
    placeHolder: 'Meeting location',
    selectedValues: [],
  },
]
