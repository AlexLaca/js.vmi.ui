import {Util} from '../../utils/util.function';

export class VmiDataFormUi {
  public index: number;
  public label: string;
  public valid: boolean;
  public readonly: boolean;
  public data: any;

  constructor(
    index?: number,
    label?: string,
    valid?: boolean,
    readonly?: boolean,
    data?: any) {

    if (!Util.isNullOrUndefined(index)) {
      this.index = index;
    }
    if (!Util.isNullOrUndefined(label)) {
      this.label = label;
    }
    if (!Util.isNullOrUndefined(valid)) {
      this.valid = valid;
    }
    if (!Util.isNullOrUndefined(readonly)) {
      this.readonly = readonly;
    }
    if (!Util.isNullOrUndefined(data)) {
      this.data = data;
    }
  }
}
