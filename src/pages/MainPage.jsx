import { useState } from "react";

function MainPage() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingText, setEditingText] = useState("");

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
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSelectEmoji = (id, emoji) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, emoji } : todo))
    );

    setSelectedTodoId(null);
  };

  const handleStartEdit = (todo) => {
    setEditingTodoId(todo.id);
    setEditingText(todo.text);
  };

  const handleSaveEdit = (id) => {
    if (editingText.trim() === "") return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );

    setEditingTodoId(null);
    setEditingText("");
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditingText("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-pink-500">PlanE</h1>

        <p className="text-pink-400 mt-2">오늘의 일정을 관리해보세요</p>
      </header>

      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <section className="bg-white rounded-3xl shadow-xl p-6 h-72">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">달력</h2>

            <div className="h-48 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
              Calendar
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-6 h-72">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
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
              className="w-full border border-pink-300 rounded-xl p-3 mb-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />

            <button
              onClick={handleAddTodo}
              disabled={!todo.trim()}
              className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-200 ${
                todo.trim()
                  ? "bg-pink-400 hover:bg-pink-500 cursor-pointer"
                  : "bg-pink-400 opacity-40 cursor-not-allowed"
              }`}
            >
              작성
            </button>
          </section>
        </div>

        <section className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            할 일 목록
          </h2>

          {todos.length === 0 ? (
            <div className="bg-pink-100 rounded-2xl p-4 text-pink-500">
              아직 등록된 할 일이 없습니다.
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="bg-pink-100 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <button
                        onClick={() => handleToggleComplete(todo.id)}
                        className="w-6 h-6 rounded-full border border-pink-500 bg-white flex items-center justify-center text-pink-500"
                      >
                        {todo.completed ? "✓" : ""}
                      </button>

                      <div className="flex-1">
                        {editingTodoId === todo.id ? (
                          <input
                            type="text"
                            value={editingText}
                            onChange={(event) =>
                              setEditingText(event.target.value)
                            }
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                handleSaveEdit(todo.id);
                              }
                            }}
                            className="w-full border border-pink-300 rounded-lg px-3 py-2 outline-none focus:border-pink-500"
                          />
                        ) : (
                          <p
                            className={
                              todo.completed
                                ? "line-through text-pink-300"
                                : "text-pink-600"
                            }
                          >
                            {todo.text}
                          </p>
                        )}

                        {todo.emoji && (
                          <p className="text-sm text-pink-500 mt-1">
                            오늘의 리뷰 {todo.emoji}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      {editingTodoId === todo.id ? (
                        <>
                          <button
                            onClick={() => handleSaveEdit(todo.id)}
                            className="bg-white px-3 py-1 rounded-lg text-pink-500 hover:bg-pink-50"
                          >
                            저장
                          </button>

                          <button
                            onClick={handleCancelEdit}
                            className="bg-white px-3 py-1 rounded-lg text-pink-500 hover:bg-pink-50"
                          >
                            취소
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              setSelectedTodoId(
                                selectedTodoId === todo.id ? null : todo.id
                              )
                            }
                            className="bg-white px-3 py-1 rounded-lg text-pink-500 hover:bg-pink-50"
                          >
                            리뷰
                          </button>

                          <button
                            onClick={() => handleStartEdit(todo)}
                            className="bg-white px-3 py-1 rounded-lg text-pink-500 hover:bg-pink-50"
                          >
                            수정
                          </button>

                          <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="bg-white px-3 py-1 rounded-lg text-pink-500 hover:bg-pink-50"
                          >
                            삭제
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {selectedTodoId === todo.id && (
                    <div className="flex gap-2 mt-3 ml-9">
                      {emojiList.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => handleSelectEmoji(todo.id, emoji)}
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