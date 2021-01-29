import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tableFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (
        val.nome.toLocaleLowerCase().includes(args)) || 
        (val.email.toLocaleLowerCase().includes(args)) || 
        (val.telefone.toLocaleLowerCase().includes(args)) || 
        (val.endereco.toLocaleLowerCase().includes(args)) || 
        (val.bairro.toLocaleLowerCase().includes(args)) || 
        (val.cidade.toLocaleLowerCase().includes(args)) || 
        (val.uf.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }
}