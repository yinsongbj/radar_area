const radars = [
    { x: 22175, y: 22133, r: 300 },
    { x: 22170, y: 22200, r: 500 },
    { x: 21950, y: 22170, r: 850 },
]

function GetRange(radarList) {
    var range = {
        left: radarList[0].x,
        right: radarList[0].x,
        top: radarList[0].y,
        bottom: radarList[0].y,
    }
    for (let i = 0; i < radarList.length; i++) {
        const r = radarList[i];
        if (r.x - r.r < range.left) {
            range.left = r.x - r.r
        }
        if (r.y + r.r > range.top) {
            range.top = r.y + r.r
        }
        if (r.x + r.r > range.right) {
            range.right = r.x + r.r
        }
        if (r.y - r.r < range.bottom) {
            range.bottom = r.y - r.r
        }
    }
    return range
}

function inCircal(radarList, point) {
    for (let i = 0; i < radarList.length; i++) {
        const radar = radarList[i];
        if (Math.pow(radar.r, 2) > Math.pow(radar.x - point.x, 2) + Math.pow(radar.y - point.y, 2)) {
            return true;
        }
    }
    return false;
}

function calcArea(radarList) {
    var maskArea = 0
    var range = GetRange(radarList)
    for (let i = range.left; i <= range.right; i++) {
        for (let j = range.bottom; j <= range.top; j++) {
            if (inCircal(radarList, { x: i, y: j })) {
                maskArea++
            }
        }
    }
    return maskArea
}

console.log("Area: ", calcArea(radars))