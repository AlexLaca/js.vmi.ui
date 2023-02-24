import {Util} from '../../utils/util.function';
import {DpabdResponseModel} from '../dpabd-response.model';
import {VmiDataFormUi} from './vmi-data-form.ui';

export class VmiStepperFormUi {

  public data: DpabdResponseModel;

  public firstStep: VmiDataFormUi;
  public secondStep: VmiDataFormUi;
  public thirdStep: VmiDataFormUi;
  public fourthStep: VmiDataFormUi;
  public fifthStep: VmiDataFormUi;

  public isPersonSingle: boolean;

  constructor(data?: DpabdResponseModel,
              firstStep?: VmiDataFormUi,
              secondStep?: VmiDataFormUi,
              thirdStep?: VmiDataFormUi,
              fourthStep?: VmiDataFormUi,
              fifthStep?: VmiDataFormUi) {

    if (!Util.isNullOrUndefined(data)) {
      this.data = data;
    }

    if (!Util.isNullOrUndefined(firstStep)) {
      this.firstStep = firstStep;
    }
    if (!Util.isNullOrUndefined(secondStep)) {
      this.secondStep = secondStep;
    }
    if (!Util.isNullOrUndefined(thirdStep)) {
      this.thirdStep = thirdStep;
    }
    if (!Util.isNullOrUndefined(fourthStep)) {
      this.fourthStep = fourthStep;
    }
    if (!Util.isNullOrUndefined(fifthStep)) {
      this.fifthStep = fifthStep;
    }
  }
}
