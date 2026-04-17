"use client";

export default function Login() {
  return (
    <div style={{ padding: 40 }}>
      <h1>TEST LOGIN PAGE</h1>

      <button
        onClick={() => alert("CLICK FUNZIONA")}
        style={{ padding: 20, background: "red", color: "white" }}
      >
        TEST BUTTON
      </button>
    </div>
  );
}