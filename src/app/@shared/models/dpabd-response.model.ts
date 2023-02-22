import {BasePersonModel} from './base-person.model';
import {AddressModel} from './address.model';
import {PersonMetadataModel} from './person-metadata.model';
import {IdentityDocumentModel} from './identity-document.model';

export class DpabdResponseModel {
  metadata: PersonMetadataModel;
  person: BasePersonModel;
  address: AddressModel;
  identityDocument: IdentityDocumentModel;
}
