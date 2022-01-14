import React, { useState } from "react";
import "./App.css";

function App() {
  const [reminders, setReminders] = useState([
    "Reminder 1",
    "Reminder 2",
    "Buy chocolate",
  ]);

  const add = () => {
    // ❌
    // reminders.push(`Reminder ${reminders.length}`);
    // setReminders(reminders)

    // ✅
    setReminders([
      ...reminders,
      `Reminder ${reminders.length}`,
      `Other Reminder ${reminders.length + 1}`,
    ]);
    console.log({ reminders });
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Reminders</h1>
      </header>
      <main className="reminders">
        <ul className="reminders-list">
          {reminders.map((reminder, index) => (
            <ReminderUI key={`Reminders-${index}`} reminder={reminder} />
          ))}
          <li className="list-element">
            <button className="reminders-add" onClick={add}>
              +
            </button>
          </li>
        </ul>
        <ul className="reminders-list">
          {reminders.map((reminder, index) => (
            <ReminderUI key={`Reminders-${index}`} reminder={reminder} />
          ))}
          <li className="list-element">
            <button className="reminders-add" onClick={add}>
              +
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

function ReminderUI({ reminder, completed }) {
  return (
    <li className="list-element">
      <p>{reminder}</p>
      {completed ? <span>Completado</span> : <></>}
    </li>
  );
}
