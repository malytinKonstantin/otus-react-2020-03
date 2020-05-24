import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import { ContactsPage } from 'pages/contacts'

interface RouteElement {
  path: string
  label: string
  component: React.Element
  props: object
}

export const routes: RouteElement[] = [
  {
    path: '/',
    label: 'главная',
    component: HomePage,
    exact: true,
  },
  {
    path: '/about',
    label: 'о нас',
    component: AboutPage,
  },
  {
    path: '/contacts',
    label: 'контакты',
    component: ContactsPage,
  },
]
