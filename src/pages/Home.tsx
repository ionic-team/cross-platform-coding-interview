import ToDoListItem from "../components/ToDoListItem";
import { createRef, useState } from "react";
import { ToDo, ToDoItem } from "capacitor-todo-plugin";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const ionListRef = createRef<HTMLIonListElement>();

  useIonViewWillEnter(async () => {
    const { todos } = await ToDo.getAll();
    setTodos(todos);
  });

  const refresh = async (e?: CustomEvent) => {
    ionListRef.current?.closeSlidingItems();
    const { todos } = await ToDo.getAll();
    setTodos(todos);
    e?.detail.complete();
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList ref={ionListRef}>
          {todos.map((t) => (
            <ToDoListItem key={t.id} todo={t} refresh={refresh} />
          ))}
          <IonButton
            expand="block"
            onClick={() => (window.location.pathname = "/todo")}
          >
            Create ToDo
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
