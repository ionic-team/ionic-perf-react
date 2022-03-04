import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { call, location, mail, phonePortrait } from "ionicons/icons";
import { useStoreState } from "pullstate";
import { useParams } from "react-router";
import EmployeeStore from "../store/EmployeeStore";
import { getEmployee } from "../store/Selectors";
import styles from "./Details.module.scss";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const employee = useStoreState(EmployeeStore, getEmployee(id));
  console.log(employee);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Employee Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Employee Details</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard class={styles.headerCard}>
          <IonCardContent>
            <IonAvatar>
              <img
                src={employee.picture.large}
                alt={`${employee.name.first} ${employee.name.last}`}
              />
            </IonAvatar>
            <IonCardTitle>
              {employee.name.first} {employee.name.last}
            </IonCardTitle>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={mail} slot="start" />
            <IonLabel>{employee.email}</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={call} slot="start" />
            <IonLabel>{employee.phone}</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={phonePortrait} slot="start" />
            <IonLabel>{employee.cell}</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={location} slot="start" />
            <IonLabel>
              {`${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`}
            </IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Details;