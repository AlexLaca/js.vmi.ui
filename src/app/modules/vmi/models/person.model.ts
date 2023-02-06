import {AddressModel} from './address.model';

export class PersonModel {
  lastName: string;
  firstName: string;
  pnc: string ;
  identityDocumentType: string | undefined;
  documentSerial: string | undefined;
  validUntil: Date | undefined;
  issuedBy: string | undefined;
  issuedDate: Date | undefined;
  citizenship: string | undefined;
  address: AddressModel | undefined;

  constructor(lastName?: string,
              firstName?: string,
              pnc?: string,
              identityDocumentType?: string,
              documentSerial?: string,
              validUntil?: Date,
              issuedBy?: string,
              issuedDate?: Date,
              citizenship?: string,
              address?: AddressModel) {
    this.lastName = lastName || '';
    this.firstName = firstName || '';
    this.pnc = pnc || '';
    this.identityDocumentType = identityDocumentType;
    this.documentSerial = documentSerial;
    this.validUntil = validUntil;
    this.issuedBy = issuedBy;
    this.issuedDate = issuedDate;
    this.citizenship = citizenship;
    this.address = address;
  }
}
