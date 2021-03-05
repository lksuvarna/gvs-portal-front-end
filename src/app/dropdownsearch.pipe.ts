import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropdownsearch'
})
export class DropdownsearchPipe implements PipeTransform {
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
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    this.result = items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });

    return this.result

  }

}
