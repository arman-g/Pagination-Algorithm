 export class SomeComponent {
     getPagination(currentPageNum, totalPageCount): Array<any> {
        const delta = 3;
        let pages = new Array();
        for (let i = 0; i < totalPageCount; i++) {
          if (i === 0 || i === totalPageCount - 1
            || (i < currentPageNum + delta + 1 &&
              i > currentPageNum - delta - 3)) {
            pages.push(i + 1);
          }
        }
        const currentIndex = pages.indexOf(currentPageNum);
        if (currentIndex - this.delta > 1) {
          pages = pages.fill("...", 1, 2);
        }
        if (currentIndex < pages.length - delta - 2) {
          pages = pages.fill("...", currentIndex + delta + 1, currentIndex + delta + 2);
        }
        return pages;
      }
  }
