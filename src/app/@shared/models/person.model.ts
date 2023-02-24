import {BasePersonModel} from './base-person.model';
import {IdentityDocumentModel} from './identity-document.model';
import {Util} from '../utils/util.function';

export class PersonModel {
  person: BasePersonModel;
  identityDocument: IdentityDocumentModel;

  constructor(person?: BasePersonModel, identityDocument?: IdentityDocumentModel) {
    if (!Util.isNullOrUndefined(person)) {
      this.person = person;
    }
    if (!Util.isNullOrUndefined(identityDocument)) {
      this.identityDocument = identityDocument;
    }
  }
}
