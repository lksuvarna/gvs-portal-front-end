import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {
 result: any
 /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (searchText.trim() === '') {
      return [];
    }

    searchText = searchText.toLocaleLowerCase();
    this.result = items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText.trim());
    });

    return this.result

  }

}
