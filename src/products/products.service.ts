import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private readonly products = [
        { id:1, name: 'ขาไก่', description: 'ชอบทุกคน'},
        { id:2, name: 'ข้าวมันไก้', description: 'ไขมันอุดตันแต่อร่อย'}
    ]

    findall() {
        return this.products;
    }

    create(product) {
        this.products.push(product);
        return this.products;
    }

    findby(id: number) {
        const product =  this.products.find(product => product.id === id);

        if (!product){
            throw new NotFoundException(`${id} not found ja!`);
        }
        else {
            return product;
        }
      }

      
}


