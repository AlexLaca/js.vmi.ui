import {Util} from '../utils/util.function';

export class AddressModel {
  county: string;
  city: string;
  village: string;
  street: string;
  streetNr: string;
  block: string;
  stairs: string;
  floor: string;
  apartment: string;
  section: number;
  siruta: string;

  isCurrentResidence: boolean;
  iseCurrentDomicile: boolean;

  constructor(
    county?: string,
    city?: string,
    village?: string,
    street?: string,
    streetNr?: string,
    block?: string,
    stairs?: string,
    floor?: string,
    apartment?: string,
    section?: number,
    siruta?: string,
    isCurrentResidence?: boolean,
    iseCurrentDomicile?: boolean) {

    if (!Util.isNullOrUndefined(county)) {
      this.county = county;
    }
    if (!Util.isNullOrUndefined(city)) {
      this.city = city;
    }
    if (!Util.isNullOrUndefined(village)) {
      this.village = village;
    }
    if (!Util.isNullOrUndefined(street)) {
      this.street = street;
    }
    if (!Util.isNullOrUndefined(streetNr)) {
      this.streetNr = streetNr;
    }
    if (!Util.isNullOrUndefined(block)) {
      this.block = block;
    }
    if (!Util.isNullOrUndefined(stairs)) {
      this.stairs = stairs;
    }
    if (!Util.isNullOrUndefined(floor)) {
      this.floor = floor;
    }
    if (!Util.isNullOrUndefined(apartment)) {
      this.apartment = apartment;
    }
    if (!Util.isNullOrUndefined(section)) {
      this.section = section;
    }
    if (!Util.isNullOrUndefined(siruta)) {
      this.siruta = siruta;
    }
    if (!Util.isNullOrUndefined(isCurrentResidence)) {
      this.isCurrentResidence = isCurrentResidence;
    }
    if (!Util.isNullOrUndefined(iseCurrentDomicile)) {
      this.iseCurrentDomicile = iseCurrentDomicile;
    }
  }
}
