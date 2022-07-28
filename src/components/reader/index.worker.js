import XLSX from 'xlsx'

var total = [0, 0]
var sortedList = {}
var yearTotal = 0
onmessage = (e) => {
    if (e.data.command === 'run') {
        let final_res = []
        let found = 'nf'
        let data = new Uint8Array(e.data.file)
        const wb = XLSX.read(data, { type: 'array' })
        const ws = wb.Sheets[e.data.branch]
        let range = XLSX.utils.decode_range(ws['!ref'])
        nameFindLoop: for (let R = 7; R <= range.e.r; R++) {
            for (let C = 3; C <= 4; C++) {
                let cell_address = { c: C, r: R }
                let readable = ws[XLSX.utils.encode_cell(cell_address)]
                try {
                    let tmp = readable.w.toLowerCase().trim()
                    if (tmp === e.data.name) {
                        //console.log(readable, cell_address)
                        found = cell_address.r
                        break nameFindLoop
                    }
                } catch (e) {
                    //console.log(e)
                }
            }
        }
        if (found !== 'nf') {
            for (let C = range.e.c; C >= range.s.c; C--) {
                let tmp_ca = { c: C, r: 3 }
                let tmp_res = ws[XLSX.utils.encode_cell(tmp_ca)]
                try {
                    let yeah = tmp_res.w.toLowerCase().trim()
                    if (yeah === 'result') {
                        let max_address = { c: C - 1, r: 5 }
                        let max = ws[XLSX.utils.encode_cell(max_address)]
                        let semMarks =
                            ws[
                                XLSX.utils.encode_cell({
                                    c: C - 1,
                                    r: found,
                                })
                            ].v
                        //console.log(semMarks)
                        final_res = {
                            sem: e.data.sem,
                            marks: `${semMarks} / ${max.v}`,
                            percentage: ((semMarks / max.v) * 100).toFixed(4),
                        }
                        total[0] += semMarks
                        total[1] += max.v
                        break
                    }
                } catch (e) {
                    //console.log(e)
                }
            }
        }
        postMessage(found !== 'nf' ? [final_res, total] : found)
    } else if (e.data.command === 'merit') {
        let data = new Uint8Array(e.data.file)
        const wb = XLSX.read(data, { type: 'array' })
        const ws = wb.Sheets[e.data.branch]
        let range = XLSX.utils.decode_range(ws['!ref'])
        let studentCol, studMarksCol
        for (let C = range.s.c; C <= range.e.c; C++) {
            let tmp_ca = { c: C, r: 3 }
            let tmp_res = ws[XLSX.utils.encode_cell(tmp_ca)]
            try {
                let yeah = tmp_res.w.toLowerCase().trim()
                if (yeah === 'student name' || yeah === "student's name") {
                    studentCol = C
                } else if (yeah === 'result') {
                    studMarksCol = C - 1
                    let max_address = { c: studMarksCol, r: 5 }
                    yearTotal += ws[XLSX.utils.encode_cell(max_address)].v
                    break
                }
            } catch (e) {
                //console.log(e)
            }
        }
        for (let R = 7; R <= range.e.r; R++) {
            let studName_cell_address = { c: studentCol, r: R }
            let studMarks_cell_address = { c: studMarksCol, r: R }
            let studName = ws[XLSX.utils.encode_cell(studName_cell_address)]
            let studMarks = ws[XLSX.utils.encode_cell(studMarks_cell_address)]
            try {
                let tmp = studName.w.toLowerCase().trim()
                if (e.data.sem == 1) sortedList[tmp] += studMarks.v
                else sortedList[tmp] = studMarks.v
            } catch (e) {
                //console.log(e)
            }
        }
        postMessage([sortedList, yearTotal])
    }
}
