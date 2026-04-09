import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleKakaoLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 p-10 w-full gap-2 border border-gray-900 rounded-xl shadow-xl shadow-neutral-900">
      <div className="flex flex-col items-cen gap-4 mb-4">
        <label className="font-bold">로그인</label>
        <input
          className="w-60 h-8 bg-gray-200 rounded-2xl "
          disabled={true}
        ></input>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <label className="font-bold">비밀번호</label>
        <input
          className="w-60 h-8 bg-gray-200 rounded-2xl"
          disabled={true}
        ></input>
      </div>
      <div className="flex justify-center">
        <button
          className="w-32 p-2 m-4 rounded-2xl bg-secondary hover:cursor-pointer hover:bg-primaryButton"
          onClick={() => {
            handleLogin;
          }}
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
            handleKakaoLogin;
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
