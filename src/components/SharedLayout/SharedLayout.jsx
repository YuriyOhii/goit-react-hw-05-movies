import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Link,
  LinkList,
  LinkItem,
  Header,
  Container,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
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
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
