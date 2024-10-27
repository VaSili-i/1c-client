import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteLogin } from 'app/provider/routeConsts';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ваш скрипт выхода, например, очистка токена
    localStorage.removeItem('token');
    // Перенаправление на страницу входа или главную страницу
    navigate(getRouteLogin());
  }, [navigate]);

  return null; // Компонент ничего не рендерит
};

export default Logout;
