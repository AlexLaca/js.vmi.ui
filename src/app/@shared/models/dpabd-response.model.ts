import {BasePersonModel} from './base-person.model';
import {AddressModel} from './address.model';
import {PersonMetadataModel} from './person-metadata.model';
import {IdentityDocumentModel} from './identity-document.model';
import {Util} from '../utils/util.function';

export class DpabdResponseModel {
  metadata: PersonMetadataModel;
  person: BasePersonModel;
  identityDocument: IdentityDocumentModel;
  address: AddressModel;

  constructor(
    metadata?: PersonMetadataModel,
    person?: BasePersonModel,
    identityDocument?: IdentityDocumentModel,
    address?: AddressModel) {

    if (!Util.isNullOrUndefined(metadata)) {
      this.metadata = metadata;
    }
    if (!Util.isNullOrUndefined(person)) {
      this.person = person;
    }
    if (!Util.isNullOrUndefined(identityDocument)) {
      this.identityDocument = identityDocument;
    }
    if (!Util.isNullOrUndefined(address)) {
      this.address = address;
    }
  }
}
