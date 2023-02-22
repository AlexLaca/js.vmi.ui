import {DictionaryModel} from './dictionary.model';

export class IdentityDocumentModel {
  documentType: DictionaryModel;
  serial: string;
  serialNr: string;
  issuedBy: string;
  issueDate: Date;
  validUntil: Date;
}
