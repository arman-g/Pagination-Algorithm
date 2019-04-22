export class SomeComponent {
  private delta: number = 2;
  
  getPagination(currentPageNum, totalPageCount): Array<any> {
    const pages = new Array<any>();
    for (let i = 0; i < totalPageCount; i++) {
      const pageNum = i + 1;
      if (i === 0 || i === totalPageCount - 1) {
        pages.push(pageNum);
      } else {
        const left = currentPageNum - this.delta - 1;
        const right = currentPageNum + this.delta + 1;
        if (i > left - 2 && i < right) {
          if (left === pageNum || right === pageNum) {
            pages.push("...");
          } else {
            pages.push(pageNum);
          }
        }
      }
    }
    return pages;
  }
}
