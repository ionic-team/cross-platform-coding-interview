import {
  IonCheckbox,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonNote,
} from "@ionic/react";
import { useState } from "react";
import ToDo, { ToDoItem } from "../plugins/todo-plugin";
import "./ToDoListItem.css";

interface ToDoListItemProps {
  todo: ToDoItem;
  refresh: () => void;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo, refresh }) => {
  const [todoDone, setTodoDone] = useState(todo.done);

  const toggleTodo = async (e: any) => {
    await ToDo.upsert({ ...todo, done: e.detail.checked });
    setTodoDone(e.detail.checked);
  };

  return (
    <IonItemSliding>
      <IonItem>
        <IonCheckbox checked={todoDone} onIonChange={toggleTodo}></IonCheckbox>
        <IonLabel className="ion-text-wrap">
          <h2>{todoDone ? <s>{todo.name}</s> : todo.name}</h2>
          <span className="date">
            <IonNote>{new Date(todo.dueDate).toLocaleString()}</IonNote>
          </span>
        </IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption
          onClick={() => (window.location.pathname = `/todo/${todo.id}`)}
        >
          Edit
        </IonItemOption>
        <IonItemOption
          color="danger"
          onClick={async () => {
            await ToDo.delete({ id: todo.id });
            refresh();
          }}
        >
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default ToDoListItem;
