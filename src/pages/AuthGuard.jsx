import {Navigate, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import {initialize} from 'utils/authHandler';
import {getLoginInfo} from "../utils/authHandler";


export default function AuthGuard({children}) {
  const {pathname} = useLocation();
  const isAuthPage = pathname.includes('auth');
  const loginInfo = getLoginInfo();

  useEffect(()=>{
    initialize();
  },[])

  // 비로그인 상태일 때
  if (!isAuthPage && !loginInfo) {
    return <Navigate to={'/auth/login'} replace />;
  }
  return children;
}
