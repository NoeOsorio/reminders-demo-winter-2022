import React, { useState } from "react";

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
    <div>
      <header>
        <h1>Reminders</h1>
      </header>
      <main>
        <ul>
          {reminders.map((reminder, index) => (
            <ReminderUI key={`Reminders-${index}`} reminder={reminder} />
          ))}
          <li>
            <button onClick={add}>Add new reminder</button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

function ReminderUI({ reminder, completed }) {
  return (
    <li>
      <p>{reminder}</p>
      {completed ? <span>Completado</span> : <></>}
    </li>
  );
}
