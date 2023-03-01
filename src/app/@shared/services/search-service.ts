import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {DpabdResponseModel} from '../models/dpabd-response.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {PersonMetadataModel} from '../models/person-metadata.model';
import {BasePersonModel} from '../models/base-person.model';
import {IdentityDocumentModel} from '../models/identity-document.model';
import {AddressModel} from '../models/address.model';
import {DictionaryModel} from '../models/dictionary.model';

@Injectable()
export class SearchService {

  public httpClientOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public searchPerson(pnc: string): Observable<DpabdResponseModel> {

    let url = 'http://localhost:5000/api/Persons/getpersonbycnp/';
    let paramUrl = url + pnc;

    // return this.httpClient.get<DpabdResponseModel>(paramUrl, this.httpClientOptions);

    let metadata: PersonMetadataModel = new PersonMetadataModel(true, new Date());

    let person: BasePersonModel = new BasePersonModel('Laca', 'Alex', '1900305330228');

    let identityDocument: IdentityDocumentModel = new IdentityDocumentModel(
      new DictionaryModel(1, 'CI'),
      'IF0294571',
      '1245sdf',
      'SPCLEP Pantelimon',
      new Date(),
      new Date());

    let address: AddressModel = new AddressModel('Ilfov', 'Dobroesti', 'Dobroesti', 'Cuza Voda', '24',
      '-', '-', '-', '6', 2, '123551', true, true);

    let addresses: Array<AddressModel> = new Array<AddressModel>();
    addresses.push(address);
    let result: DpabdResponseModel = new DpabdResponseModel(metadata, person, identityDocument, addresses);

    return of(result);
  }
}
