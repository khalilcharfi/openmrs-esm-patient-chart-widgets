import { openmrsFetch } from "@openmrs/esm-api";

const customRepresentation =
  "custom:(display,uuid," +
  "personA:(uuid,display,person:(age,display))," +
  "personB:(uuid,display,person:(age,display))," +
  "relationshipType:(uuid,display,description,aIsToB,bIsToA))";

export function fetchPatientRelationships(patientIdentifier: string) {
  return openmrsFetch<{ results: Relationship[] }>(
    `/ws/rest/v1/relationship?v=${customRepresentation}&person=${patientIdentifier}`
  );
}

export type Relationship = {
  display: string;
  uuid: number;
  personA: {
    uuid: string;
    person: {
      age: number;
      display: string;
    };
  };
  personB: {
    uuid: string;
    person: {
      age: number;
      display: string;
    };
  };
  relationshipType: {
    uuid: string;
    display: string;
    aIsToB: string;
    bIsToA: string;
  };
};
