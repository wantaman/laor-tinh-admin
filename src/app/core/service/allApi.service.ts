import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AllService {

    baseApi = environment.baseAPI;
    finalBaseApi = this.baseApi
    ValueFilter: any

    productUrl = 'api/products';
    categoryUrl = 'api/categories';
    userUrl = 'api/users/profile'

    constructor(
        private http: HttpClient,
    ) {
    
    }

    getAllDataWithFilter(url: any, filter: any) {
        let myParams = new HttpParams()
        if (filter) {
            Object.keys(filter).forEach(function (key) {
                if (filter[key] != null) {
                    myParams = myParams.append(key, filter[key])
                }
            });
        }
        return this.http.get(this.baseApi + url, { params: myParams })
    }

    getAllData(url: any, filter?: any) {
        let myParams = new HttpParams()
        if (filter) {
            Object.keys(filter).forEach(function (key) {
                if (filter[key] != null) {
                    myParams = myParams.append(key, filter[key])
                }
            });
        }
        return this.http.get(this.finalBaseApi + url, { params: myParams })
    }

    getDataById(url: any, id: any) {
        return this.http.get(this.finalBaseApi + url + id)

    }


    createData(url: any, data: any) {
        return this.http.post(this.finalBaseApi + url, data);
    }

    getData(url: any) {
        return this.http.get(this.finalBaseApi + url);
    }

    editData(url: any, data: any, id: any) {
        return this.http.patch(this.finalBaseApi + url + id + '/', data);
    }

    deleteData(url: any, id: any) {
        return this.http.delete(this.finalBaseApi + url + id + '/')
    }

    getAllDataWithoutFilter(url: any) {
        return this.http.get(this.finalBaseApi + url)
    }


    getDataDetailById(url: any, id: any, filter?: any) {
        let myParams = new HttpParams()
        if (filter) {
            Object.keys(filter).forEach(function (key) {
                if (filter[key] != null) {
                    myParams = myParams.append(key, filter[key])
                }
            });
        }
        return this.http.get(this.finalBaseApi + url + id, { params: myParams })
    }

    updateFile(url : any, data : any, id : any){ 
        const req = new HttpRequest('patch', this.baseApi + url + id +'/',data, {
            reportProgress: true,
            responseType: 'json'
        });

        return this.http.request(req);     
    }

}


// history params
export class HistoryAgentParams {
    member: number | undefined;
    start_date?: any;
    end_date?: any;
}