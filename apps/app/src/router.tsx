import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { MainLayout } from './layouts';
import { SignInPage, SignUpPage } from '~/pages';
import { FormListPage } from './modules/forms';
import { FormEditPage } from './modules/forms';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to='admin' />} />
      <Route path='auth'>
        <Route index element={<Navigate to='signin' />} />
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='forgot' element={<SignUpPage />} />
      </Route>
      <Route path="admin">
        <Route index element={<Navigate to='form' />} />
        <Route path="form">
          <Route index element={<FormListPage />} />
          <Route path=":id" element={<FormEditPage />} />
          {/* <Route path="create" element={} />  */}
        </Route>
        {/* <Route index element={<Navigate to='form' />} /> */}
        {/* <Route path="form" element={<FormTable flex={1} />} /> */}
        {/* <Route path="form/*" element={<FormRoutes />} /> */}
      </Route>
    </Route>
  )
);

export default router;
