import { RouteProps } from 'react-router-dom';
import { List as CategoryList } from '../pages/category/List';
import { Dashboard } from '../pages/Dashboard';

type MyRouteProps = RouteProps & {
  label: string
  name: string
}

export const routes: MyRouteProps[] = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: '/',
    element: <Dashboard />,
  },
  {
    name: 'categories.list',
    label: 'Listar categorias',
    path: '/categories',
    element: <CategoryList />,
  },
  {
    name: 'categories.create',
    label: 'Criar categorias',
    path: '/categories/create',
    element: <CategoryList />,
  }
]