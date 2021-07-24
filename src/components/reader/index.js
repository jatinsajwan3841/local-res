import XLSX from 'xlsx'

const reader = async (name, branch) => {
    let excelfiles = [
        'dat/B. TECH. I SEM DEC 18.xlsx',
        'dat/B. TECH. II SEM JUNE 2019.xlsx',
        'dat/B. TECH. III SEM DECEMBER 2019.xlsx',
        'dat/B. TECH. IV SEM DECEMBER 2020.xlsx',
    ]
    let final_res = []
    await Promise.all(
        excelfiles.map((v, i) =>
            fetch(v)
                .then((response) => response.arrayBuffer())
                .then((buffer) => {
                    let data = new Uint8Array(buffer)
                    const wb = XLSX.read(data, { type: 'array' })
                    const ws = wb.Sheets[branch]
                    let found
                    let range = XLSX.utils.decode_range(ws['!ref'])
                    for (let R = 7; R <= range.e.r; R++) {
                        for (let C = 3; C <= 4; C++) {
                            let cell_address = { c: C, r: R }
                            let readable =
                                ws[XLSX.utils.encode_cell(cell_address)]
                            let tmp = readable?.w?.toLowerCase()
                            if (tmp === name) {
                                //console.log(readable, cell_address)
                                found = cell_address.r
                            }
                        }
                    }
                    for (let C = range.s.c; C <= range.e.c; C++) {
                        let tmp_ca = { c: C, r: 3 }
                        let tmp_res = ws[XLSX.utils.encode_cell(tmp_ca)]
                        let yeah = tmp_res?.w?.toLowerCase()
                        if (yeah === 'result') {
                            let max_address = { c: C - 1, r: 5 }
                            let max = ws[XLSX.utils.encode_cell(max_address)]
                            //console.log(max)
                            final_res = [
                                ...final_res,
                                `${
                                    ws[
                                        XLSX.utils.encode_cell({
                                            c: C - 1,
                                            r: found,
                                        })
                                    ].v
                                } / ${max.v}`,
                            ]
                        }
                    }
                    //const res = XLSX.utils.sheet_to_json(ws, { header: 1 })
                    //setDat(res)
                })
                .catch((err) => console.error(err)),
        ),
    )
    return final_res
}
export default reader
