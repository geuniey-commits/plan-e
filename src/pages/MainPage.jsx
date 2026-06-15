import { useState } from "react";

function MainPage() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-pink-400">PlanE</h1>
        <p className="text-pink-300 mt-2">오늘의 일정을 관리해보세요</p>
      </header>

      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <section className="bg-white rounded-3xl shadow-lg p-6 h-72">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">달력</h2>
            <div className="h-48 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-400">
              Calendar
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-lg p-6 h-72">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              할 일 입력
            </h2>

            <input
              type="text"
              placeholder="할 일을 입력하세요"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              className="w-full border border-pink-200 rounded-xl p-3 mb-4"
            />

            <button
              onClick={handleAddTodo}
              className="w-full bg-pink-300 hover:bg-pink-400 text-white py-3 rounded-xl"
            >
              작성
            </button>
          </section>
        </div>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">할 일 목록</h2>

          {todos.length === 0 ? (
            <div className="bg-pink-100 rounded-2xl p-4 text-pink-400">
              아직 등록된 할 일이 없습니다.
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((item, index) => (
                <div
                  key={index}
                  className="bg-pink-100 rounded-2xl p-4 text-pink-500"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default MainPage;