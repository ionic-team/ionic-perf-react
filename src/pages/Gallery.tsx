import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useStoreState } from "pullstate";
import { Employee } from "../data/employees";
import EmployeeStore from "../store/EmployeeStore";
import { getEmployees } from "../store/Selectors";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  const employees = useStoreState(EmployeeStore, getEmployees);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {employees.map((employee: Employee, index: number) => (
              <IonCol size="3" key={index}>
                <IonRouterLink
                  routerLink={`/details/${employee.login.uuid}`}
                  routerDirection="forward"
                >
                  <IonImg
                    src={employee.picture.large}
                    alt={`${employee.name.first} ${employee.name.last}`}
                    class={styles.galleryImg}
                  />
                </IonRouterLink>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
