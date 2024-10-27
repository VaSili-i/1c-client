import { type AppDispatch } from 'app/provider/store/config/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
