import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getReminders } from "./Services/reminders.service";
import {
  addReminder,
  getReminders as getRemindersSelector,
} from "./Services/reminders.reducer";

function App() {
  const reminders = useSelector(getRemindersSelector);
  const disptach = useDispatch();

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
    const newReminder = {
      completed: false,
      id: reminders.length + 1,
      title: "Nuevo reminder",
      userId: 1,
    };
    disptach(addReminder(newReminder));
    console.log({ reminders });
  };

  return (
    <div className="container">
      <header className="header">
        <h3 className="header__title">Task Manager</h3>
      </header>
      <main className="reminders">
        <div className="reminders__list">
          {/* <li className="list__element">
            <button className="reminders__add" onClick={add}>
              +
            </button>
          </li> */}
          {reminders.map((reminder) => (
            <ReminderUI key={`Reminders__${reminder.id}`} reminder={reminder} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

function ReminderUI({ reminder }) {
  const { completed, id, title } = reminder;
  return (
    <section className="reminder">
      <div className="reminder__meta">
        <div className="meta__tags">
          <span className="tag">{id}</span>
          <span className="tag">School</span>
          <span className="tag">{id}</span>
        </div>
        <button className="meta__edit">✏️</button>
      </div>
      <h2 className="reminder__title">{title}</h2>
      <div className="reminder__actions">
        <div className="actions__date">
          <span className="actions__date--day">Fecha</span>
          <span className="actions__date--hour">Hora</span>
        </div>
        <input
          className="actions__completed"
          defaultChecked={completed}
          type="checkbox"
        />
      </div>
    </section>
  );
}
