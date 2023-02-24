import {Util} from '../utils/util.function';

export class PersonMetadataModel {
  public isValid: boolean;
  public deathDate: Date;

  constructor(isValid?: boolean, deathDate?: Date) {
    if (!Util.isNullOrUndefined(isValid)) {
      this.isValid = isValid;
    }
    if (!Util.isNullOrUndefined(deathDate)) {
      this.deathDate = deathDate;
    }
  }
}
