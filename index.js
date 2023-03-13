const body = document.querySelector('body');
const ttable = document.querySelector('table');
const cells = document.getElementsByClassName('cls');
for (let cell of cells) {
    let rows = document.getElementsByTagName('tr');
    cell.addEventListener('mouseover', (e) => {
        let target = e.target;
        for (let row of rows) {
            if (row.contains(target) && target.rowSpan <= 1) {
                let hd = row.getElementsByClassName('day')[0];
                hd.style.backgroundColor = 'rgb(254, 92, 95)';
            }
        }
    });
    cell.addEventListener('mouseout', (e) => {
        let target = e.target;
        for (let row of rows) {
            if (row.contains(target)) {
                let hd = row.getElementsByClassName('day')[0];
                hd.style.backgroundColor = 'rgb(128, 15, 233)';
            }
        }
    });
}
let thdrs = document.getElementsByClassName('day');
for (let thdr of thdrs) {
    let rows = document.getElementsByTagName('tr');
    thdr.addEventListener('mouseover', (e) => {
        let target = e.target;
        target.style.backgroundColor = 'rgb(254, 92, 95)';
        for (let row of rows) {
            if (row.contains(target)) {
                row.style.boxShadow = '2px 4px 10px black';
            }
            else {
                if (row.id === 'time' || row.id === 'title')
                    continue;
                row.style.filter = 'blur(2px)';
            }
        }
    });
    thdr.addEventListener('mouseout', (e) => {
        let target = e.target;
        target.style.backgroundColor = 'rgb(128, 15, 233)';
        for (let row of rows) {
            if (row.contains(target)) {
                row.style.boxShadow = 'none';
            }
            row.style.filter = 'none';
        }
    });
}
