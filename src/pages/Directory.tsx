import { 
  IonContent, 
  IonHeader, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonAvatar, 
} from '@ionic/react';
import './Directory.css';
import { data, Employee } from '../data/employees';
import { Virtuoso } from 'react-virtuoso';

const Directory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Employee Directory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Employee Directory</IonTitle>
          </IonToolbar>
        </IonHeader>

        { data.length > 0 && 
          <Virtuoso
            data={data}
            style={{ height: '100%', width: '100%' }}
            itemContent={(index: React.Key , employee: Employee ) => (
              <IonItem id={ `employeeItem_${ employee.id.value }` } key={ index } lines="none">
                <IonAvatar slot="start">
                  <img src={employee.picture.thumbnail} alt={`${ employee.name.first } ${ employee.name.last }`} />
                </IonAvatar>
                <IonLabel>
                  <h2>{ employee.name.first } { employee.name.last }</h2>
                  <p>{ employee.email }</p>
                  <p>{ employee.location.city }, { employee.location.state }</p>
                </IonLabel>
              </IonItem>)}
          />
        }
      </IonContent>
    </IonPage>
  );
};

export default Directory;
