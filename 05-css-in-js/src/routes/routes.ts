import { HomePage } from '@/pages/home'
import { AboutPage } from '@/pages/about'
import { ContactsPage } from '@/pages/contacts'
import { PeoplePageContainer } from '@/pages/people'
import type { RouteProps } from 'react-router-dom'

interface RouteElement extends RouteProps {
  path: string
  label: string
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
  {
    path: '/people',
    label: 'люди',
    component: PeoplePageContainer,
  },
]
