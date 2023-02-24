import {DictionaryModel} from './dictionary.model';
import {Util} from '../utils/util.function';

export class IdentityDocumentModel {
  documentType: DictionaryModel;
  serial: string;
  serialNr: string;
  issuedBy: string;
  issueDate: Date;
  validUntil: Date;

  constructor(
    documentType?: DictionaryModel,
    serial?: string,
    serialNr?: string,
    issuedBy?: string,
    issueDate?: Date,
    validUntil?: Date) {

    if (!Util.isNullOrUndefined(documentType)) {
      this.documentType = documentType;
    }
    if (!Util.isNullOrUndefined(serial)) {
      this.serial = serial;
    }
    if (!Util.isNullOrUndefined(serialNr)) {
      this.serialNr = serialNr;
    }
    if (!Util.isNullOrUndefined(issuedBy)) {
      this.issuedBy = issuedBy;
    }
    if (!Util.isNullOrUndefined(issueDate)) {
      this.issueDate = issueDate;
    }
    if (!Util.isNullOrUndefined(validUntil)) {
      this.validUntil = validUntil;
    }
  }
}
