export enum DataStoreObjects {
  ACTIVE_WORKFLOW_INDEX = 'active_workflow_index',
  VMI_ACTIVE_FORM_INDEX = 'active_form_index',
  VMI_REQUEST_FORM_DATA = 'request_form_data',
  VMI_USER = 'vmi_user',
}
export enum ActiveWorkflowIndex {
  VMI_LANDING_PAGE = 0,
  VMI_REQUEST_FORM = 1,
  VMI_REQUEST_LIST = 2
}
export enum VmiEvents {
  VMI_FORM_APPLICANT_SEARCHED = 0,
  VMI_FORM_MEMBER_SEARCHED = 1
}
export enum VmiFormSteps {
  CHAPTER_0_STEP = -1,
  CHAPTER_1_STEP = 0,
  CHAPTER_2_STEP = 1,
  CHAPTER_3_STEP = 2,
  CHAPTER_4_STEP = 3,
  SUMMARY_STEP = 4,
}
export enum VmiFormPaths {
  REQUEST_PATH = '/init',
  CHAPTER_1_PATH = '/request/chapter-1',
  CHAPTER_2_PATH = '/request/chapter-2',
  CHAPTER_3_PATH = '/request/chapter-3',
  CHAPTER_4_PATH = '/request/chapter-4',
  SUMMARY_PATH = '/request/summary'
}
export enum VmiFormNavigationEvent {
  NEXT = 0,
  PREV = 1,
  CANCEL = 2
}
export enum KinshipDegreeIndex {
  PARTNER = 0,
  CHILD = 1,
  OTHER = 2
}
