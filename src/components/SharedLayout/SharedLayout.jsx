import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Link,
  LinkList,
  LinkItem,
  Header,
  Container,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
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
      </Header>
      <Container>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
