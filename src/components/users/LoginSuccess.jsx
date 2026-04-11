import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../store/authSlice";

const LoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const refresh = searchParams.get("refresh");

    if (token && refresh) {
      dispatch(login({ token, refresh }));
      navigate("/");
    } else {
      alert("로그인에 실패했습니다");
      navigate("/login");
    }
  }, [searchParams, dispatch, navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default LoginSuccess;
