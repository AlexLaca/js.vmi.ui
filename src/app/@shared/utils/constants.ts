export enum DataStoreObjects {
  ACTIVE_WORKFLOW_INDEX = 'active_workflow_index',
  VMI_ACTIVE_FORM_INDEX = 'active_form_index'
}
export enum ActiveWorkflowIndex {
  VMI_LANDING_PAGE = 0,
  VMI_REQUEST_FORM = 1,
  VMI_REQUEST_LIST = 2
}
export enum VmiFormSteps {
  SEARCH_APPLICANT_STEP = 0,
  APPLICANT_INFO_STEP = 1,
  ADDRESS_INFO_STEP = 2
}
export enum VmiFormPaths {
  REQUEST = '/request',
  APPLICANT = '/request/applicant',
  ADDRESS = '/request/address',
}
