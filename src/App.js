import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { getReminders } from "./Services/reminders.service";
import { getReminders as getRemindersSelector } from "./Services/reminders.reducer";

function App() {
  const reminders = useSelector(getRemindersSelector);

  useEffect(() => {
    getReminders();
  }, []);

  const add = () => {
    // ❌
    // reminders.push(`Reminder ${reminders.length}`);
    // setReminders(reminders)

    // ✅
    // setReminders([
    //   ...reminders,
    //   { title: `Reminder ${reminders.length + 1}`, id: reminders.length + 1 },
    // ]);
    console.log({ reminders });
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Reminders</h1>
      </header>
      <main className="reminders">
        <ul className="reminders-list">
          {reminders.map((reminder) => (
            <ReminderUI key={`Reminders-${reminder.id}`} reminder={reminder} />
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

function ReminderUI({ reminder }) {
  const { completed, id, title, userId } = reminder;
  return (
    <li className="list-element">
      <p>
        {id}.- {title} {completed ? <span>✅</span> : <></>}
      </p>
    </li>
  );
}
