function polygonArea(A, B, C, D) {
    return (A * B) + (B * (C - A)) / 2
}

const totalArea = polygonArea(4, 6, 10, 3)