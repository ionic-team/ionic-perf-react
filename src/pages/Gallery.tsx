import { 
  IonCol,
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonImg, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import { data, Employee } from '../data/employees';

class Gallery extends Component {
  state = {
    useApi: false,
    employees: data
  }

  componentDidMount() {
    if (this.state.useApi) {
      axios.get('https://randomuser.me/api/1.3/?results=2500&seed=809a1c1e796196f4&nat=us&exc=login&noinfo')
      .then(res => {
        const employees = res.data.results;
        this.setState({ employees });
      })
    }
  }

  render() { 
    return(
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
              {this.state.employees.map((employee: Employee, index: number) => (
                <IonCol size="3" key={index}>
                  <IonImg src={employee.picture.large} alt={`${ employee.name.first } ${ employee.name.last }`} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    )
  }
};

export default Gallery;
