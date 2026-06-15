import { Link } from "react-router";

function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
          PlanE
        </h1>

        <input
          type="text"
          placeholder="아이디"
          className="w-full border border-slate-200 rounded-xl p-3 mb-4 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full border border-slate-200 rounded-xl p-3 mb-6 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />

        <Link to="/main">
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl mb-4 transition-all">
            로그인
          </button>
        </Link>

        <div className="text-center">
          <Link
            to="/signup"
            className="text-sky-500 hover:text-sky-600"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;