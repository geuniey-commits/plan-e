import { Link } from "react-router";

function LoginPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-pink-400 text-center mb-8">
          PlanE
        </h1>

        <input
          type="text"
          placeholder="아이디"
          className="w-full border border-pink-200 rounded-xl p-3 mb-4"
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full border border-pink-200 rounded-xl p-3 mb-6"
        />

        <Link to="/main">
          <button className="w-full bg-pink-300 hover:bg-pink-400 text-white py-3 rounded-xl mb-4">
            로그인
          </button>
        </Link>

        <div className="text-center">
          <Link to="/signup" className="text-pink-400 hover:text-pink-500">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;