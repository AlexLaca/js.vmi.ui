export enum DataStoreObjects {
  ACTIVE_WORKFLOW_INDEX = 'active_workflow_index',
  VMI_ACTIVE_FORM_INDEX = 'active_form_index',
  VMI_REQUEST_FORM_DATA = 'request_form_data'
}
export enum ActiveWorkflowIndex {
  VMI_LANDING_PAGE = 0,
  VMI_REQUEST_FORM = 1,
  VMI_REQUEST_LIST = 2
}
export enum VmiFormSteps {
  SEARCH_APPLICANT_STEP = 0,
  APPLICANT_INFO_STEP = 1,
  ADDRESS_INFO_STEP = 2,
  HOUSEHOLD_STEP = 3,
  STATEMENT_STEP = 4,
  SUMMARY_STEP = 5,
}
export enum VmiFormPaths {
  REQUEST_PATH = '/request',
  APPLICANT_PATH = '/request/applicant',
  ADDRESS_PATH = '/request/address',
  HOUSEHOLD_PATH = '/request/household',
  STATEMENT_PATH = '/request/statement',
  SUMMARY_PATH = '/request/summary'
}
