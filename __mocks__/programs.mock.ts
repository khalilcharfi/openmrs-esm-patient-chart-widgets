export const mockProgramResponse = {
  uuid: "8ba6c08f-66d9-4a18-a233-5f658b1755bf",
  patient: {
    uuid: "90f7f0b4-06a8-4a97-9678-e7a977f4b518",
    display: "10010W - John Taylor"
  },
  program: {
    uuid: "64f950e6-1b07-4ac0-8e7e-f3e148f3463f",
    name: "HIV Care and Treatment",
    allWorkflows: []
  },
  display: "HIV Care and Treatment",
  dateEnrolled: "2019-11-01T15:00:00.000+0000",
  dateCompleted: null,
  location: null,
  voided: false,
  outcome: null,
  states: [],
  resourceVersion: "1.8"
};

export const mockOncProgramResponse = {
  uuid: "46bd14b8-2357-42a2-8e16-262e8f0057d7",
  patient: {
    uuid: "90f7f0b4-06a8-4a97-9678-e7a977f4b518",
    display: "10010W - John Taylor"
  },
  program: {
    uuid: "11b129ca-a5e7-4025-84bf-b92a173e20de",
    name: "Oncology Screening and Diagnosis",
    allWorkflows: []
  },
  display: "Oncology Screening and Diagnosis",
  dateEnrolled: "2020-03-25T00:00:00.000+0000",
  dateCompleted: "2020-03-25T00:00:00.000+0000",
  location: {
    uuid: "58c57d25-8d39-41ab-8422-108a0c277d98",
    display: "Outpatient Clinic"
  },
  voided: false,
  outcome: null,
  states: [],
  resourceVersion: "1.8"
};

export const mockEnrolledProgramsResponse = [
  {
    uuid: "8ba6c08f-66d9-4a18-a233-5f658b1755bf",
    program: {
      uuid: "64f950e6-1b07-4ac0-8e7e-f3e148f3463f",
      name: "HIV Care and Treatment",
      allWorkflows: []
    },
    display: "HIV Care and Treatment",
    dateEnrolled: "2020-01-16T00:00:00.000+0000",
    dateCompleted: null
  }
];

export const mockCareProgramsResponse = [
  {
    uuid: "64f950e6-1b07-4ac0-8e7e-f3e148f3463f",
    display: "HIV Care and Treatment",
    allWorkflows: [],
    concept: {
      uuid: "70724784-438a-490e-a581-68b7d1f8f47f",
      display: "HIV TREATMENT"
    }
  },
  {
    uuid: "11b129ca-a5e7-4025-84bf-b92a173e20de",
    display: "Oncology Screening and Diagnosis",
    allWorkflows: [],
    concept: {
      uuid: "cd7b7672-318f-4a28-b8d9-da739b095b56",
      display: "ONCOLOGY SCREENING AND DIAGNOSIS PROGRAM"
    }
  },
  {
    uuid: "b2f65a51-2f87-4faa-a8c6-327a0c1d2e17",
    display: "HIV Differentiated Care",
    allWorkflows: [],
    concept: {
      uuid: "4ba298ca-1b1c-4270-b614-968c6df443e9",
      display: "HIV DIFFERENTIATED CARE PROGRAM"
    }
  }
];

export const mockEmptyProgramsResponse = {
  headers: null,
  ok: true,
  redirected: true,
  status: 200,
  statusText: "ok",
  trailer: null,
  type: null,
  url: "",
  clone: null,
  body: null,
  bodyUsed: null,
  arrayBuffer: null,
  blob: null,
  formData: null,
  json: null,
  text: null,
  data: {
    results: []
  }
};

export const mockProgramsResponse = {
  headers: null,
  ok: true,
  redirected: true,
  status: 200,
  statusText: "ok",
  trailer: null,
  type: null,
  url: "",
  clone: null,
  body: null,
  bodyUsed: null,
  arrayBuffer: null,
  blob: null,
  formData: null,
  json: null,
  text: null,
  data: {
    results: [
      {
        uuid: "b033f8c3-7e0b-4118-aa1d-76c550f2978d",
        program: {
          uuid: "64f950e6-1b07-4ac0-8e7e-f3e148f3463f",
          name: "HIV Care and Treatment",
          allWorkflows: [],
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/program/64f950e6-1b07-4ac0-8e7e-f3e148f3463f"
            }
          ]
        },
        display: "HIV Care and Treatment",
        dateEnrolled: "2019-11-01T00:00:00.000+0000",
        dateCompleted: null,
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/programenrollment/b033f8c3-7e0b-4118-aa1d-76c550f2978d"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/programenrollment/b033f8c3-7e0b-4118-aa1d-76c550f2978d?v=full"
          }
        ]
      }
    ]
  }
};

export const mockLocationsResponse = [
  {
    uuid: "aff27d58-a15c-49a6-9beb-d30dcfc0c66e",
    display: "Amani Hospital"
  },
  {
    uuid: "b1a8b05e-3542-4037-bbd3-998ee9c40574",
    display: "Inpatient Ward"
  },
  {
    uuid: "2131aff8-2e2a-480a-b7ab-4ac53250262b",
    display: "Isolation Ward"
  },
  {
    uuid: "7fdfa2cb-bc95-405a-88c6-32b7673c0453",
    display: "Laboratory"
  },
  {
    uuid: "f76c0c8e-2c3a-443c-b26d-96a9f3847764",
    display: "Mosoriot Pharmacy"
  },
  {
    uuid: "5035669f-00c0-4187-9ed6-f6b85128fb26",
    display: "Mosoriot Subcounty Hospital"
  },
  {
    uuid: "c9e8613f-1cc1-4769-81d7-318fe853c150",
    display: "MTRH"
  },
  {
    uuid: "1675978f-4ee2-4b4a-a849-99029f9698fc",
    display: "MTRH Module 4"
  },
  {
    uuid: "58c57d25-8d39-41ab-8422-108a0c277d98",
    display: "Outpatient Clinic"
  },
  {
    uuid: "7f65d926-57d6-4402-ae10-a5b3bcbf7986",
    display: "Pharmacy"
  },
  {
    uuid: "6351fcf4-e311-4a19-90f9-35667d99a8af",
    display: "Registration Desk"
  },
  {
    uuid: "8d6c993e-c2cc-11de-8d13-0010c6dffd0f",
    display: "Unknown Location"
  }
];
