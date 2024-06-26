import { Controller, Get, Post, Body, Param, ParseIntPipe  } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productservices: ProductsService) {}

    @Get()
    getAllproducts() {
        return this.productservices.findall();
    }

    @Get(':id')
    getAllproductById(@Param('id', ParseIntPipe) id: number) {
        return this.productservices.findby(id);
    }

    @Post()
    addPro(@Body() product){
        return this.productservices.create(product);
    }
}
