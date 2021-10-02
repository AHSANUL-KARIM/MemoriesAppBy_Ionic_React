import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { Filesystem, Directory } from '@capacitor/filesystem';
import React, { useContext, useRef, useState } from 'react';
import { base64FromPath } from '@ionic/react-hooks/filesystem';

import './NewMemory.css';
import MemoriesContext, { MemoryType } from '../data/memories-context';
import { useHistory } from 'react-router';
import ImagePicker, {Photo} from '../component/ImagePicker';

const NewMemory: React.FC = () => {

    const [takenPhoto, setTakenPhoto] = useState<Photo>();
   

    const [chosenMemoryType, setChosenMemoryType] = useState<MemoryType>('good');
    const titleRef = useRef<HTMLIonInputElement>(null);

    const history = useHistory();

    const memoriesCtx = useContext(MemoriesContext);

    const photoPickHandler = (photo: Photo) => {
        setTakenPhoto(photo);
    }

    const selectMemoryTypeHandler = (event: CustomEvent) => {
        const selectedMemoryType = event.detail.value;
        setChosenMemoryType(selectedMemoryType);
    }

   

    const addMemoryHandler = async () => {

        const enteredTitle = titleRef.current?.value;

        if(
            !enteredTitle ||
            enteredTitle.toString().trim().length === 0 ||
            !takenPhoto ||
            !chosenMemoryType
        ) {
            return;
        }

      

        memoriesCtx.addMemory(takenPhoto, enteredTitle.toString(), chosenMemoryType);
        history.length > 0 ? history.goBack() : history.replace('/good-memories');
    }

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/good-memories" />
                        
                    </IonButtons>
                    <IonTitle>Add New Memory</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Memory Title</IonLabel>
                                <IonInput type="text" ref={titleRef}></IonInput>  
                            </IonItem>
                       
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonSelect onIonChange={selectMemoryTypeHandler} value={chosenMemoryType}>
                                <IonSelectOption value="good">Good Memory</IonSelectOption>
                                <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                            </IonSelect>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-text-center">
                        <IonCol>
                            <ImagePicker onImagePick={photoPickHandler} />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                        <IonCol className="ion-text-center">
                            <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )

}

export default NewMemory;