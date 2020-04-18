

"use strict";

let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML(`afterbegin`, result);
        this.colorCellLight(figure);
        this.addNambers();
        this.insertColsChars();
    },

    generateBoard() {
        let board = "";
        for (let y = 1; y <= config.rowsCont; y++) {
            board += '<tr>';
            for (let x = 1; x <= config.colsCont; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += `</tr>`;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    colorCellLight(position) {
        for (let y = position.y; y <= config.rowsCont; y++) {
            position.y = y;
            position.x = 1;
            for (let x = position.x; x <= config.colsCont; x++) {
                position.x = x;
                if (y % 2 != 0 && x % 2 == 0) {
                    document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`).classList.add("light");
                } else {
                    if (y % 2 == 0 && x % 2 != 0) {
                        document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`).classList.add("light");
                    } else {
                        document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`).classList.add("dark");
                    }
                }
            }
        }
    },
    app: {
        letter: ["A", "B", "C", "D", "I", "F", "G", "H"],
        nams: ["1", "2", "3", "4", "5", "6", "7", "8"]
    },

    addNambers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement("p");
            td.innerText = this.app.nams[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    insertColsChars() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.app.letter.length; i++) {
            tr.innerHTML += `<td>${this.app.letter[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },
}
