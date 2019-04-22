export class SomeComponent {
  getPagination(currentPageNum, totalPageCount): Array<any> {
    const pages = new Array<any>();
    for (let i = 0; i < totalPageCount; i++) {
      const pageNum: any = i + 1;
      if (i === 0 || i === totalPageCount - 1) {
        pages.push(pageNum);
      } else {
        const right = currentPageNum + this.delta + 1;
        const left = currentPageNum - this.delta - 1;
        if (i < right && i > left - 2) {
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
