import {Util} from '../utils/util.function';

export class DictionaryModel {
  id: number;
  value: string;

  constructor(id?: number, value?: string) {
    if (!Util.isNullOrUndefined(id)) {
      this.id = id;
    }
    if (!Util.isNullOrUndefined(value)) {
      this.value = value;
    }
  }
}
