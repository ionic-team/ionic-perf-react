import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { images, imagesOutline, people, peopleOutline } from "ionicons/icons";
import Directory from "./pages/Directory";
import Gallery from "./pages/Gallery";
import { SplashScreen } from "@capacitor/splash-screen";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React, { useState } from "react";
import Details from "./pages/Details";
import { fetchEmployees } from "./store/EmployeeStore";

setupIonicReact();

const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide();
    fetchEmployees(false);
  }, []);

  const [selectedTab, setSelectedTab] = useState("directory");

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsWillChange={(e) => setSelectedTab(e.detail.tab)}>
          <IonRouterOutlet>
            <Route exact path="/directory">
              <Directory />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Redirect to="/directory" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="directory" href="/directory">
              <IonIcon
                icon={selectedTab === "directory" ? people : peopleOutline}
              />
              <IonLabel>Directory</IonLabel>
            </IonTabButton>
            <IonTabButton tab="gallery" href="/gallery">
              <IonIcon
                icon={selectedTab === "gallery" ? images : imagesOutline}
              />
              <IonLabel>Gallery</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
