import {IdentityDocumentModel} from './identity-document.model';

export class BasePersonModel {
  lastName: string;
  firstName: string;
  pnc: string ;



  constructor(lastName?: string,
              firstName?: string,
              pnc?: string,
              identityDocumentType?: IdentityDocumentModel,
             ) {

  }
}
