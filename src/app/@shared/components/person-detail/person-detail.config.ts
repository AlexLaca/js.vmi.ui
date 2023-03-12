import {Util} from '../../utils/util.function';

export class PersonDetailConfig {
  public showKinshipRelationship: boolean;
  public showMaritalStatus: boolean;
  public showSchoolStatus: boolean;
  public showProfessionalStatus: boolean;
  public showTotalIncome: boolean;
  public showDegreeOfDisability: boolean;
  public showBeneficiaryOfRights: boolean;

  constructor(
    showKinshipRelationship?: boolean,
    showMaritalStatus?: boolean,
    showSchoolStatus?: boolean,
    showProfessionalStatus?: boolean,
    showTotalIncome?: boolean,
    showDegreeOfDisability?: boolean,
    showBeneficiaryOfRights?: boolean
  ) {
    if (!Util.isNullOrUndefined(showKinshipRelationship)) {
      this.showKinshipRelationship = showKinshipRelationship;
    }
    if (!Util.isNullOrUndefined(showMaritalStatus)) {
      this.showMaritalStatus = showMaritalStatus;
    }
    if (!Util.isNullOrUndefined(showSchoolStatus)) {
      this.showSchoolStatus = showSchoolStatus;
    }
    if (!Util.isNullOrUndefined(showProfessionalStatus)) {
      this.showProfessionalStatus = showProfessionalStatus;
    }
    if (!Util.isNullOrUndefined(showTotalIncome)) {
      this.showTotalIncome = showTotalIncome;
    }
    if (!Util.isNullOrUndefined(showDegreeOfDisability)) {
      this.showDegreeOfDisability = showDegreeOfDisability;
    }
    if (!Util.isNullOrUndefined(showBeneficiaryOfRights)) {
      this.showBeneficiaryOfRights = showBeneficiaryOfRights;
    }
  }
}
