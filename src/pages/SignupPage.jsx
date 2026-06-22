import api from "../api/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  

  const handleSignup = async () => {
    try {
      const res = await api.post("/api/members/register", {
        username,
        password,
      });

      console.log("회원가입된 member_id:", res.data.member_id);

      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      if (err.response?.status === 400) {
        alert(err.response.data.message);
      } else {
        alert("회원가입 실패");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-3xl shadow-xl">
        <div className="mb-6">
          <Link to="/" className="text-sky-500 hover:text-sky-600">
            ← 로그인 화면으로 돌아가기
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
          PlanE
        </h1>

        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-slate-200 rounded-xl p-3 mb-4 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-slate-200 rounded-xl p-3 mb-6 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />

        {success && (
          <div className="mb-4 bg-sky-100 text-sky-700 p-3 rounded-xl text-center">
            ✅ 회원가입이 완료되었습니다!
          </div>
        )}

        {!success && (
            <button
                onClick={handleSignup}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl transition-all"
            >
                회원가입 완료
            </button>
        )}
      </div>
    </div>
  );
}

export default SignupPage;