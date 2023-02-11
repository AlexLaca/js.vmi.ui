export class DemandModel {
  id: number;
  serial: string;
  status: string;
  applicant: string;
  insDate: string;
  insCounty: string;

  constructor(
    id?: number,
    serial?: string,
    status?: string,
    applicant?: string,
    insDate?: string,
    insCounty?: string) {

    this.id = id || 0;
    this.serial = serial || '';
    this.status = status || '';
    this.applicant = applicant || '';
    this.insDate = insDate || '';
    this.insCounty = insCounty || '';
  }
}
