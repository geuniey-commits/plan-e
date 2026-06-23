import { Link, useNavigate } from "react-router";
import { useState } from "react";
import api from "../api/axios";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/members/login", {
        username,
        password,
      });

      console.log(res.data);

      navigate("/main", {
      state: {
        memberId: res.data.member_id,
      },
    });
  } catch (err) {
    if (err.response?.data?.message) {
      alert(err.response.data.message);
    } else {
      alert("로그인 실패");
    }
  }
};

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-3xl shadow-xl">
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

        <button
          onClick={handleLogin}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl mb-4 transition-all"
        >
          로그인
        </button>

        <div className="text-center">
          <Link to="/signup" className="text-sky-500 hover:text-sky-600">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;