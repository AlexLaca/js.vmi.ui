import {Util} from '../utils/util.function';

export class BasePersonModel {
  public lastName: string;
  public firstName: string;
  public pnc: string ;

  constructor(lastName?: string, firstName?: string, pnc?: string) {
    if (!Util.isNullOrUndefined(lastName)) {
      this.lastName = lastName;
    }
    if (!Util.isNullOrUndefined(firstName)) {
      this.firstName = firstName;
    }
    if (!Util.isNullOrUndefined(pnc)) {
      this.pnc = pnc;
    }
  }
}
