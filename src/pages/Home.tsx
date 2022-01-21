import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonAvatar, useIonViewWillEnter } from '@ionic/react';
import './Home.css';
import { data, Employee } from '../data/employees';
import { Virtuoso } from 'react-virtuoso';
import { SplashScreen } from '@capacitor/splash-screen';

const Home: React.FC = () => {

  useIonViewWillEnter(() => {
    SplashScreen.hide();
  });

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
            <IonItem id={ `employeeItem_${ employee.id }` } key={ index } lines="none">
              <IonAvatar slot="start">
                <img src={`assets/avatars/${employee.id}-thumb.jpg`} alt={`${ employee.firstName }`} />
              </IonAvatar>
              <IonLabel>
                <h2>{ employee.firstName } { employee.lastName }</h2>
                <p>{ employee.title }</p>
                <p>{ employee.office }</p>
              </IonLabel>
						</IonItem>)}
        />
      }
      </IonContent>
    </IonPage>
  );
};

export default Home;
