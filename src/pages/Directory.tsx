import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useStoreState } from "pullstate";
import { Virtuoso } from "react-virtuoso";
import { Employee } from "../data/employees";
import EmployeeStore from "../store/EmployeeStore";
import { getEmployees } from "../store/Selectors";

const Directory: React.FC = () => {
  const employees = useStoreState(EmployeeStore, getEmployees);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Employee Directory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {employees.length > 0 && (
          <Virtuoso
            data={employees}
            style={{ height: "100%", width: "100%" }}
            itemContent={(index: React.Key, employee: Employee) => (
              <IonItem
                id={`employeeItem_${employee.id.value}`}
                key={index}
                lines="none"
                routerLink={`/details/${employee.login.uuid}`}
                routerDirection="forward"
              >
                <IonAvatar slot="start">
                  <img
                    src={employee.picture.thumbnail}
                    alt={`${employee.name.first} ${employee.name.last}`}
                  />
                </IonAvatar>
                <IonLabel>
                  <h2>
                    {employee.name.first} {employee.name.last}
                  </h2>
                  <p>{employee.email}</p>
                  <p>
                    {employee.location.city}, {employee.location.state}
                  </p>
                </IonLabel>
              </IonItem>
            )}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Directory;
