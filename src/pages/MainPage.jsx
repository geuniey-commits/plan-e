import { useState } from "react";

function MainPage() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const emojiList = ["😊", "😍", "😐", "😭", "🔥", "😴"];

  const handleAddTodo = () => {
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
      emoji: "",
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleSelectEmoji = (id, emoji) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, emoji }
          : todo
      )
    );

    setSelectedTodoId(null);
  };

  const handleEditTodo = (id) => {
    const newText = prompt("수정할 내용을 입력하세요");

    if (newText === null || newText.trim() === "") return;

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-pink-400">
          PlanE
        </h1>

        <p className="text-pink-300 mt-2">
          오늘의 일정을 관리해보세요
        </p>
      </header>

      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <section className="bg-white rounded-3xl shadow-lg p-6 h-72">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              달력
            </h2>

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
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleAddTodo();
                }
              }}
              className="w-full border border-pink-200 rounded-xl p-3 mb-4 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
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
          <h2 className="text-2xl font-bold text-pink-400 mb-4">
            할 일 목록
          </h2>

          {todos.length === 0 ? (
            <div className="bg-pink-100 rounded-2xl p-4 text-pink-400">
              아직 등록된 할 일이 없습니다.
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="bg-pink-100 rounded-2xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          handleToggleComplete(todo.id)
                        }
                        className="w-6 h-6 rounded-full border border-pink-400 bg-white flex items-center justify-center text-pink-400"
                      >
                        {todo.completed ? "✓" : ""}
                      </button>

                      <div>
                        <p
                          className={
                            todo.completed
                              ? "line-through text-pink-300"
                              : "text-pink-500"
                          }
                        >
                          {todo.text}
                        </p>

                        {todo.emoji && (
                          <p className="text-sm text-pink-400 mt-1">
                            오늘의 리뷰 {todo.emoji}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setSelectedTodoId(
                            selectedTodoId === todo.id
                              ? null
                              : todo.id
                          )
                        }
                        className="bg-white px-3 py-1 rounded-lg hover:bg-pink-50"
                      >
                        리뷰
                      </button>

                      <button
                        onClick={() =>
                          handleEditTodo(todo.id)
                        }
                        className="bg-white px-3 py-1 rounded-lg text-pink-400 hover:bg-pink-50"
                      >
                        수정
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteTodo(todo.id)
                        }
                        className="bg-white px-3 py-1 rounded-lg text-pink-400 hover:bg-pink-50"
                      >
                        삭제
                      </button>
                    </div>
                  </div>

                  {selectedTodoId === todo.id && (
                    <div className="flex gap-2 mt-3 ml-9">
                      {emojiList.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() =>
                            handleSelectEmoji(
                              todo.id,
                              emoji
                            )
                          }
                          className="bg-white w-9 h-9 rounded-full hover:bg-pink-50"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}
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