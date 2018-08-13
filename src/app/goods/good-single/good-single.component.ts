import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { GoodsService } from '../../shared/services/goods.service';


@Component({
	selector: 'app-good-single',
	templateUrl: './good-single.component.html',
	styleUrls: ['./good-single.component.css']
})
export class GoodSingleComponent implements OnInit {

	goodsList: any;
	good: any;
	extraGood = {
		description: "P20, без преувеличения, - совершенный камерофон от Huawei. Оптика Leica, процессор Kirin 970 с нейросетевым модулем и цифровой стабилизатор изображения позволяют получать снимки, ничуть не уступающие по качеству полученным на профессиональном фотоаппарате.",
		id: 1,
		name: "Huawei P20 Black",
		photo: "https://img.mvideo.ru/Pdb/30032521b.jpg",
		qty: 10
	};



	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private service: GoodsService
	) {
	}


	ngOnInit() {
		console.log("good-single is active!")
		this.activatedRoute.params.subscribe((params: Params) => {
			const id = +params['id'];
			this.service.getGoodById(id)
				.subscribe(good => {
					console.log(good)
					this.good = good;
				});
		})
	}

	goBack() {
		this.router.navigate(['/goods-list']);
	}

}
