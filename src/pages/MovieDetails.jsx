import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <div>
      <div>MovieDetails</div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
