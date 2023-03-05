import {Util} from '../../utils/util.function';

export class EventStepNavigationModel {
  public activeStepIndex: number;
  public eventType: number;

  constructor(activeStepIndex?: number, eventType?: number) {
    if (!Util.isNullOrUndefined(activeStepIndex)) {
      this.activeStepIndex = activeStepIndex;
    }
    if (!Util.isNullOrUndefined(eventType)) {
      this.eventType = eventType;
    }
  }
}
