/* eslint-disable no-nested-ternary */
import React from 'react';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import { makeStyles } from '@mui/styles';
import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { routes } from '../routes';
import RouterParser from 'route-parser';
import { Box, Container } from '@mui/material';

const breadcrumbNameMap: { [key: string]: string } = {};
routes.forEach(route => breadcrumbNameMap[route.path as string] = route.label);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 360,
    },
    linkRouter: {
      color: '#4db5ab',
      "&:focus, &:active": {
        color: '#4db5ab'
      },
      "&:hover": {
        color: '#055a52'
      }
    }
  }),
);

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

export function RouterBreadcrumbs() {
  const classes = useStyles();
  const location = useLocation();

  function makeBreadcrumb() {
    const pathnames = location.pathname.split('/').filter((x: any) => x);
    pathnames.unshift('/');

    return (
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((_, index: number) => {
          const last = index === pathnames.length - 1;
          const to = `${pathnames.slice(0, index + 1).join('/').replace('//', '/')}`;
          const route = Object.keys(breadcrumbNameMap).find((path) => new RouterParser(path).match(to));

          if (route === undefined) {
            return false;
          }

          return last ? (
            <Typography color="textPrimary" key={to}>
              {breadcrumbNameMap[route]}
            </Typography>
          ) : (
            <LinkRouter color="inherit" to={to} key={to} className={classes.linkRouter}>
              {breadcrumbNameMap[route]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    );
  }

  return (
    <Container>
      <Box paddingBottom={2}>
        {makeBreadcrumb()}
      </Box>
    </Container>
  );
}
