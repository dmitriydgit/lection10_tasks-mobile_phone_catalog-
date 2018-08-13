import { Component, OnInit, } from '@angular/core';

import { GoodsService } from '../../shared/services/goods.service';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessagesService } from '../../shared/services/messages.service';


@Component({
	selector: 'app-goods-list',
	templateUrl: './goods-list.component.html',
	styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

	goods;
	//router: any;
	//впилить гудс сервис
	constructor(
		private goodService: GoodsService,
		private msgService: MessagesService,
		private router: Router,
		private route: ActivatedRoute,
	) {
	}

	ngOnInit() {
		//console.log("goods component active!");
		this.goodService.getGoods()
			.subscribe((goods) => {
				this.goods = goods;
				console.log(this.goods);
			});
	}

	openGoodById(id) {
		//console.log(id)
		this.router.navigate(['/goods-list', id, 'view']);
	}

	buyGoodById(id?) {
		console.log(id)
		this.msgService.setMessage({
			type: 'success',
			body: 'Товар добавлен в корзину!'
		});


		this.router.navigate(['/goods-list', id, 'buy']);
	}
}
