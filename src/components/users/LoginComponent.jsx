import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { login as loginApi } from "../../api/authApi";
import { useState } from "react";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginParam, setLoginParam] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginParam({ ...loginParam, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const data = await loginApi(loginParam);
      dispatch(
        login({
          token: data.data.accessToken,
          refresh: data.data.refreshToken,
        }),
      );
      alert("로그인 성공");
      navigate("/");
    } catch (e) {
      console.error(e);
      alert("이메일 또는 비밀번호를 확인해주세요");
    }
  };

  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 p-10 w-full gap-2 border border-gray-900 rounded-xl shadow-xl shadow-neutral-900">
      <div className="flex flex-col items-cen gap-4 mb-4">
        <label className="font-bold">이메일</label>
        <input
          name="email"
          className="w-60 h-8 bg-gray-200 rounded-2xl px-4 text-black"
          value={loginParam.email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <label className="font-bold">비밀번호</label>
        <input
          name="password"
          type="password"
          className="w-60 h-8 bg-gray-200 rounded-2xl px-4 text-black"
          value={loginParam.password}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex justify-center">
        <button
          className="w-32 p-2 m-4 rounded-2xl bg-secondary hover:cursor-pointer hover:bg-primaryButton"
          onClick={handleLogin}
        >
          로그인
        </button>
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-2 mb-2">
        <hr className="border border-gray-500 w-2/12"></hr>
        <div className="w-6/12 flex justify-center items-center">
          소셜 SNS 로그인
        </div>
        <hr className="border border-gray-500 w-2/12"></hr>
      </div>
      <div className="w-2/3 flex flex-row items-center justify-between">
        <button
          className="w-12 h-12 rounded-full bg-amber-200 text-black text-sm hover:cursor-pointer"
          onClick={() => {
            handleKakaoLogin();
          }}
        >
          카카오
        </button>
        <button className="w-12 h-12 rounded-full bg-amber-200 text-black text-sm">
          구글
        </button>
        <button className="w-12 h-12 rounded-full bg-amber-200 text-black text-sm">
          네이버
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
