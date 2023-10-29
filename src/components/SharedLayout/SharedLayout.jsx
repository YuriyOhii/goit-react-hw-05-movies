import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, LinkList, LinkItem } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <LinkList>
            <LinkItem>
              <Link to={'/'}>Home</Link>
            </LinkItem>
            <LinkItem>
              <Link to={'/movies'}>Movies</Link>
            </LinkItem>
          </LinkList>
        </nav>
      </header>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
