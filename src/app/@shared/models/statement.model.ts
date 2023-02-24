import {Util} from '../utils/util.function';

export class StatementModel {
  public totalIncomePreviousMonth: number;
  public hasOwnedGoods: boolean;
  public hasOtherRequests: boolean;
  public isNotLivingWithOtherPersonsOrFamilies: boolean;
  public wasInformedAboutRightsAndObligations: boolean;
  public totalIncome: number;
  public isOwnerOfCurrentResidence: boolean;
  public heatingType: number;
  public isObligedToInformInCaseOfChange: boolean;
  public hasAgreedUponPersonalDataProcessing: boolean;
  public hasAgreedUponPersonalOrFamilyDataRetrieval: boolean;

  constructor(
    totalIncomePreviousMonth?: number,
    hasOwnedGoods?: boolean,
    hasOtherRequests?: boolean,
    isNotLivingWithOtherPersonsOrFamilies?: boolean,
    wasInformedAboutRightsAndObligations?: boolean,
    totalIncome?: number,
    isOwnerOfCurrentResidence?: boolean,
    heatingType?: number,
    isObligedToInformInCaseOfChange?: boolean,
    hasAgreedUponPersonalDataProcessing?: boolean,
    hasAgreedUponPersonalOrFamilyDataRetrieval?: boolean) {

    if (!Util.isNullOrUndefined(totalIncomePreviousMonth)) {
      this.totalIncomePreviousMonth = totalIncomePreviousMonth;
    }
    if (!Util.isNullOrUndefined(hasOwnedGoods)) {
      this.hasOwnedGoods = hasOwnedGoods;
    }
    if (!Util.isNullOrUndefined(hasOtherRequests)) {
      this.hasOtherRequests = hasOtherRequests;
    }
    if (!Util.isNullOrUndefined(isNotLivingWithOtherPersonsOrFamilies)) {
      this.isNotLivingWithOtherPersonsOrFamilies = isNotLivingWithOtherPersonsOrFamilies;
    }
    if (!Util.isNullOrUndefined(wasInformedAboutRightsAndObligations)) {
      this.wasInformedAboutRightsAndObligations = wasInformedAboutRightsAndObligations;
    }
    if (!Util.isNullOrUndefined(totalIncome)) {
      this.totalIncome = totalIncome;
    }
    if (!Util.isNullOrUndefined(isOwnerOfCurrentResidence)) {
      this.isOwnerOfCurrentResidence = isOwnerOfCurrentResidence;
    }
    if (!Util.isNullOrUndefined(heatingType)) {
      this.heatingType = heatingType;
    }
    if (!Util.isNullOrUndefined(isObligedToInformInCaseOfChange)) {
      this.isObligedToInformInCaseOfChange = isObligedToInformInCaseOfChange;
    }
    if (!Util.isNullOrUndefined(hasAgreedUponPersonalDataProcessing)) {
      this.hasAgreedUponPersonalDataProcessing = hasAgreedUponPersonalDataProcessing;
    }
    if (!Util.isNullOrUndefined(hasAgreedUponPersonalOrFamilyDataRetrieval)) {
      this.hasAgreedUponPersonalOrFamilyDataRetrieval = hasAgreedUponPersonalOrFamilyDataRetrieval;
    }
  }
}
