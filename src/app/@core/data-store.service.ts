import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';

export class DataStoreService {
  private data;
  private behaviourSubjectOnData;

  constructor() {
    this.data = {};
    this.behaviourSubjectOnData = new BehaviorSubject(this.data);
  }

  public getObservableForDataChange(): Observable<{}> {
    return this.behaviourSubjectOnData.asObservable();
  }

  public refreshDataOnAllObservers(): void {
    this.behaviourSubjectOnData.next(this.data);
  }

  public setData(key: string, value: any): void {
    // @ts-ignore
    this.data[key] = value;
  }

  public getDataDirectly(key: any): any {
    // @ts-ignore
    return this.data[key];
  }

  public hardReset(): void {
    this.data = {};
    this.behaviourSubjectOnData.next(this.data);
  }
}
