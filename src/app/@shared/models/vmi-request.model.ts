import {BasePersonModel} from './base-person.model';
import {AddressModel} from './address.model';
import {IdentityDocumentModel} from './identity-document.model';
import {StatementModel} from './statement.model';

export class VmiRequestModel {
  person: BasePersonModel;
  identityDocument: IdentityDocumentModel;
  addresses: Array<AddressModel>;
  familyMembers: Array<BasePersonModel>;
  isPersonSingle: boolean;
  statement: StatementModel;

  constructor(
    id?: number,
    serial?: string,
    status?: string,
    applicant?: string,
    insDate?: string,
    insCounty?: string) {
  }
}
