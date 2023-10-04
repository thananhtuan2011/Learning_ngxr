import { currentProductSelector } from './../../../core/selector/product.selector';
import { loadData } from './../../../core/action/product.action';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  listProduct: any;
  listSlide: any;
  searchString: string;
  lstProductNew: [];
  lstProductSeller: any
  listproduct: Observable<any>;
  constructor(private product_services: ProductService,
    config: NgbCarouselConfig,
    private store: Store<any>,
    private changeDetectorRefs: ChangeDetectorRef) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  getListSPHome() {

    this.store.dispatch(loadData());

    // this.product_services.getListSPHome().subscribe((res: any) => {
    //   if (res) {
    //     this.listProduct = res.data;
    //     console.log("getListSPHome", this.listProduct)
    //     this.changeDetectorRefs.detectChanges();
    //   }
    // })

  }

  GetDSSlideMini() {
    this.product_services.GetDSSlideMini().subscribe((res: any) => {
      if (res) {
        this.listSlide = res.data;
        console.log("listSlide", this.listSlide)
        this.changeDetectorRefs.detectChanges();
      }
    })
  }
  GetDSBest() {
    this.product_services.GetDSBest().subscribe((res: any) => {
      if (res) {
        this.lstProductSeller = res.data;

        this.changeDetectorRefs.detectChanges();
      }
    })
  }
  ngOnInit(): void {
    this.getListSPHome();

    this.listproduct = this.store.select(currentProductSelector);
    this.listproduct.pipe(map(dt => {
      console.log("cvvvdsvs", dt)
    })).subscribe()
    // const currentItems = this.listproduct.
    // this.listproduct.subscribe(res => {
    //   console.log("ress", res);
    //   this.listProduct = res
    //   // this.changeDetectorRefs.detectChanges();
    //   console.log("getListSPHome", this.listProduct)
    // })
    this.GetDSSlideMini()
    this.GetDSBest();
  }

}
