import { useState } from "react";
import ToDo, { ToDoItem } from "../plugins/todo-plugin";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useParams } from "react-router";
import "./CreateTodo.css";

function CreateToDo() {
  const [todo, setTodo] = useState<Partial<ToDoItem>>();
  const [name, setName] = useState<string | undefined>();
  const [dueDate, setDueDate] = useState<number | undefined>();

  const params = useParams<{ id?: string }>();

  useIonViewWillEnter(async () => {
    if (params.id !== undefined) {
      const { todo } = await ToDo.getOne({ id: parseInt(params.id, 10) });
      setTodo(todo);
      setName(todo.name);
      setDueDate(todo.dueDate);
    }
  });

  const upsert = async () => {
    if (!dueDate || !name) {
      alert("Name and Due Date required");
      return;
    } else {
      const done = !!todo?.done;
      const id = todo?.id;
      await ToDo.upsert({ id, name, dueDate, done });
      window.location.pathname = "/home";
    }
  };

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="ToDos" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position="fixed">Name</IonLabel>
            <IonInput
              type="text"
              placeholder="Enter Name"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Due Date</IonLabel>
            <IonDatetime
              placeholder="Select Date"
              value={
                dueDate !== undefined
                  ? new Date(dueDate).toISOString()
                  : undefined
              }
              onIonChange={(e) =>
                setDueDate(new Date(e.detail.value as string).getTime())
              }
            ></IonDatetime>
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={() => upsert()}>
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default CreateToDo;
