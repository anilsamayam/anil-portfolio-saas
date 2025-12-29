
"use client";
import { useState } from "react";

export default function Chatbot() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  async function ask() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ question: q })
    });
    const data = await res.json();
    setA(data.answer);
  }

  return (
    <div className="chatbox">
      <input
        placeholder="Ask about my skills, projects, or experience"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button onClick={ask}>Ask</button>
      {a && <p className="answer">{a}</p>}
    </div>
  );
}
