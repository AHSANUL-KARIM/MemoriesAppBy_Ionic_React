import { IonCol, IonRow } from "@ionic/react";
import React from "react";
import { Memory } from "../data/memories-context";
import MemoryItem from "./MemoryItem";

const MemoriesList: React.FC<{ items: Memory[]}> = props => {

    return ( 
        <React.Fragment>
            {
                  props.items.map(memory => (
                    <IonRow key={memory.id}>
                        <IonCol>
                            <MemoryItem image={memory.base64Url} title={memory.title} />
                        </IonCol>
                    </IonRow>
                ))
            }
        </React.Fragment>
      );
}

export default MemoriesList;