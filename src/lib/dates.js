
export const getDay = (date) => {
    switch (date.getDay()) {
        case 0:
            return "Domenica";
        case 1:
            return "Lunedì";
        case 2:
            return "Martedì";
        case 3:
            return "Mercoledì";
        case 4:
            return "Giovedì";
        case 5:
            return "Venerdì";
        case 6:
            return "Sabato";
    }
}

export const getDates = (date, index) => {
    let dates = []
    
    let curDate = date.getDate()

    for (let i = 5; i > 0; i--) {
        dates.push(new Date(new Date().setDate(curDate-i)))
    }
    
    for (let i = 0; i <= 5; i++) {
        dates.push(new Date(new Date().setDate(curDate+i)))
    }

    return dates
}