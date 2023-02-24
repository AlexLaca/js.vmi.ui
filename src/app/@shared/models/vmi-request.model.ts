import {BasePersonModel} from './base-person.model';
import {AddressModel} from './address.model';
import {IdentityDocumentModel} from './identity-document.model';
import {StatementModel} from './statement.model';
import {Util} from '../utils/util.function';

export class VmiRequestModel {
  public person: BasePersonModel;
  public identityDocument: IdentityDocumentModel;
  public addresses: Array<AddressModel>;
  public familyMembers: Array<BasePersonModel>;
  public statement: StatementModel;

  public isPersonSingle: boolean;

  constructor(
    person?: BasePersonModel,
    identityDocument?: IdentityDocumentModel,
    addresses?: Array<AddressModel>,
    familyMembers?: Array<BasePersonModel>,
    statement?: StatementModel,
    isPersonSingle?: boolean) {

    if (!Util.isNullOrUndefined(person)) {
      this.person = person;
    }
    if (!Util.isNullOrUndefined(identityDocument)) {
      this.identityDocument = identityDocument;
    }
    if (!Util.isNullOrUndefined(addresses)) {
      this.addresses = addresses;
    }
    if (!Util.isNullOrUndefined(familyMembers)) {
      this.familyMembers = familyMembers;
    }
    if (!Util.isNullOrUndefined(statement)) {
      this.statement = statement;
    }
    if (!Util.isNullOrUndefined(isPersonSingle)) {
      this.isPersonSingle = isPersonSingle;
    }
  }
}
