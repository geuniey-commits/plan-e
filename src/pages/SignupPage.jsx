import { Link } from "react-router";

function SignupPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-3xl shadow-lg">

        <div className="mb-6">
          <Link
            to="/"
            className="text-pink-400 hover:text-pink-500"
          >
            ← 로그인 화면으로 돌아가기
          </Link>
        </div>

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

        <button
          className="w-full bg-pink-300 hover:bg-pink-400 text-white py-3 rounded-xl"
        >
          회원가입 완료
        </button>

      </div>
    </div>
  );
}

export default SignupPage;