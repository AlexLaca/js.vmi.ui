export class BasePersonModel {
  lastName: string;
  firstName: string;
  pnc: string ;
  identityDocumentType: string | undefined;
  documentSerial: string | undefined;
  documentNumber: string | undefined;
  validUntil: Date | undefined;
  issuedBy: string | undefined;
  issuedDate: Date | undefined;
  citizenship: string | undefined;

  constructor(lastName?: string,
              firstName?: string,
              pnc?: string,
              identityDocumentType?: string,
              documentSerial?: string,
              documentNumber?: string,
              validUntil?: Date,
              issuedBy?: string,
              issuedDate?: Date,
              citizenship?: string) {
    this.lastName = lastName || '';
    this.firstName = firstName || '';
    this.pnc = pnc || '';
    this.identityDocumentType = identityDocumentType;
    this.documentNumber = documentNumber;
    this.documentSerial = documentSerial;
    this.validUntil = validUntil;
    this.issuedBy = issuedBy;
    this.issuedDate = issuedDate;
    this.citizenship = citizenship;
  }
}
