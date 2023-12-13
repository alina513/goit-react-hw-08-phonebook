import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from './ContactsList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { fetchContacts } from '../redux/operations';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../components/Loader';
import { selectIsLoading } from '../redux/selectors';
import { selectError } from '../redux/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/operations';
import { useAuth } from '../hooks/useAuth';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Layout } from './Layout';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
   return isRefreshing ? (
    <b>Refreshing user...</b>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    );
  };
  