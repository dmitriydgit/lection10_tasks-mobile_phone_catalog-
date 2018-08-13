import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, pluck, tap, filter } from 'rxjs/operators';

@Injectable()
export class GoodsService {
	goodsData;
	private goodsUrl = 'https://gist.githubusercontent.com/nntndfrk/661cbb5e3c005a09078e1b8f41ee9aa4/raw/d9b60d6f8f3cad794ffc8bfe727a99672e7378b5/phones/';

	constructor(private http: HttpClient) {
		//this.getUsers();
	}

	getGoods(): Observable<any> {
		if (!this.goodsData) {
			let items = this.http.get(this.goodsUrl)
			return items;
		} else {
			return of(this.goodsData);
		}
	}


	getGoodById(id?): Observable<any> {
		return this.http.get(this.goodsUrl)
			.pipe(
				map((dataList: Array<any>) => {
					return dataList.filter(el => el.id === id)[0];
				})
			)
	}

	// getFilteredData(filterId) {
	//   return this.http.get(this.url)
	//     .pipe(
	//       map((dataList: Array<any>) => {
	//         return dataList.filter(el => el.id === filterId)[0];
	//       })
	//     )
	// }



	// getUser(id: number): Observable<User> {
	// 	if (!this.goodsData) {
	// 		return this.http.get(`${this.goodsData}/${id}`)
	// 			.pipe(
	// 				pluck('data'),
	// 				//map(this.toUser)
	// 			);
	// 	} else {
	// 		let curUser = new User();
	// 		this.goodsData.forEach(user => {
	// 			if (user.id === id) {
	// 				curUser = user;
	// 			}
	// 		});
	// 		return of(curUser);
	// 	}

	// }



  /**
   * Преобразовать данные "на лету" в тот формат который нужен нам
   */
	// private toUser(user): User {
	// 	return {
	// 		id: user.id,
	// 		name: `${user.first_name} ${user.last_name}`,
	// 		username: user.first_name,
	// 		avatar: user.avatar,
	// 		password: '123456'
	// 	};
	// }

}
